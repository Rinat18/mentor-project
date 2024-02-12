import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, API_CATEGORIES } from "../../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  //! create
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    navigate("/products");
  }

  //! get products
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  //! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  //! get one product
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };
  // ! GET category
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: ACTIONS.GET_CATEGORIES,
      payload: data,
    });
  };
	// ! CREATE CATORIY
	const createCategory = async(newCategory) => {
		await axios.post(API_CATEGORIES, newCategory);
		getCategories()
	}
  // ! FILTER
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if(value === "All"){
      search.delete(query)
    }else{
      search.set(query, value)
    }
    const url = `${window.location.pathname}?${search.toString()}`
    navigate(url)
  }
  const values = {
    addProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct: state.oneProduct,
    products: state.products,
	categories: state.categories,
	getCategories,
	createCategory,
  fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
