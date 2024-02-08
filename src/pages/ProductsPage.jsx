import React from "react";
import ProductList from "../components/product/ProductList";
import SideBar from "../components/product/SideBar";

const ProductsPage = () => {
	return (
		<div style={{display: "flex"}}>
			<div style={{width:"300px", flex: "none"}}>
				<SideBar />
			</div>
			<ProductList />
		</div>
	);
};

export default ProductsPage;
