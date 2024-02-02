import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const { getProducts, products } = useProduct();
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				{products.map((elem) => (
					<ProductCard key={elem.id} {...elem} />
				))}
			</Box>
		</>
	);
};

export default ProductList;
