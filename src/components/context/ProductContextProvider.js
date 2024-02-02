import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
	products: [],
	oneProduct: {},
};
function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case ACTIONS.GET_PRODUCTS:
			return { ...state, products: action.payload };
		case ACTIONS.GET_ONE_PRODUCTS:
			return { ...state, oneProduct: action.payload };
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
		navigate("/product");
	}

	const values = {
		addProduct,
	};
	return (
		<productContext.Provider value={values}>{children}</productContext.Provider>
	);
};

export default ProductContextProvider;