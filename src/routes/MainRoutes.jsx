import React from "react";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import EditPage from "../pages/EditPage";
import AdminPage from "../pages/AdminPage";
import Cartpage from "../pages/Cartpage";

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{ id: 1, link: "/", element: <HomePage /> },
		{ id: 2, link: "/products", element: <ProductsPage /> },
		{ id: 3, link: "/about", element: <AboutPage /> },
		{ id: 4, link: "*", element: <NotFoundPage /> },
		{ id: 5, link: "/cart", element: <Cartpage /> },
		{ id: 6, link: "/auth", element: <AuthPage /> },
		{ id: 7, link: "/contacts", element: <ContactsPage /> },
		{ id: 8, link: "/admin", element: <AdminPage /> },
		{ id: 9, link: "/editProduct/:id", element: <EditPage /> },
	];
	return (
		<>
			<Routes>
				{PUBLIC_ROUTES.map((elem) => (
					<Route key={elem.id} path={elem.link} element={elem.element} />
				))}
			</Routes>
		</>
	);
};

export default MainRoutes;
