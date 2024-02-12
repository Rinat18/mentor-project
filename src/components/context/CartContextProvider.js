import React, { createContext, useContext, useReducer } from "react";
import Cart from "../cart/Cart";
import { ACTIONS } from "../../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getLocalStorage,
  getProductsCountInCart,
} from "../../helpers/function";
import { json } from "react-router-dom";
const cartContext = createContext();
export const useCart = () => useContext(cartContext);
const INIT_STATE = {
  cart: [],
  cartlength: getProductsCountInCart(),
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //   ! GET
  const getCart = () => {
    let cart = getLocalStorage();

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
      };
      //   обновляем состояние
    }

    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  //   ! CREATE
  //   функция для добавление товара в корзину
  const addProductToCart = (product) => {
    // получаем содержимое из  хранилища под ключом cart
    let cart = getLocalStorage();
    // проверка на сушествование данных в хранилище под ключом cart
    
    // Создаем обьект, который добавим в localStorage в массив cart.products
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };

    // проверка если этот продукт в корзине
    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    // тут удаляем товар который уже прошел через filter
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    // пересчитываем totalPrice
    cart.totalPrice = calcTotalPrice(cart.products);

    // обновляем данные в локалке
    localStorage.setItem("cart", JSON.stringify(cart));
    // обновляем состояние
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // функция для проверки товара в корзине
  const checkProductInCart = (id) => {
    let cart = getLocalStorage();
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  };
  // функция для изменения стоимости для одной позиции
  const changeProductCount = (id, count) => {
    // получаем данные корзины из local storage
    let cart = getLocalStorage();
    // перебираем массив с продуктакми из корзины, и у продукта, у которого id совпадает с тем id? что передали при вызове, перезаписываем count(кол-во) и subPrice
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
        cart.totalPrice = calcTotalPrice(cart.products);
      }
      return elem;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  // ! DELETE
  const deleteProductFromCart = (id) => {
    let cart = getLocalStorage();
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  
  const values = {
    addProductToCart,
    cart: state.cart,
    getCart,
    checkProductInCart,
    getProductsCountInCart,
    changeProductCount,
    deleteProductFromCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;

