import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditProduct = () => {
	const { id } = useParams();
	const { getOneProduct, oneProduct, editProduct } = useProduct();
	const [product, setProduct] = useState({
		title: "",
		description: "",
		price: 0,
		image: "",
	});
	const handleInput = (e) => {
		if (e.target.name == "price") {
			const newObj = {
				...product,
				[e.target.name]: Number(e.targe.value),
			};
			setProduct(newObj);
		} else {
			const newObj = { ...product, [e.target.name]: e.target.value };
			setProduct(newObj);
		}
	};
	useEffect(() => {
		getOneProduct(id);
	}, []);
	useEffect(() => {
		if (oneProduct) {
			setProduct(oneProduct);
		}
	}, [oneProduct]);
	return (
		<>
			<Box
				sx={{
					width: "50vw",
					height: 400,
					margin: "20px auto",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="h4" align="center">
					EDIT PRODUCT
				</Typography>
				<TextField
					onChange={handleInput}
					value={product.title}
					fullWidth
					name="title"
					label="Title"
					variant="outlined"
				/>
				<TextField
					onChange={handleInput}
					value={product.description}
					fullWidth
					name="description"
					label="Description"
					variant="outlined"
				/>
				<TextField
					onChange={handleInput}
					value={product.price}
					fullWidth
					name="price"
					label="Price"
					variant="outlined"
				/>
				<TextField
					onChange={handleInput}
					value={product.image}
					fullWidth
					name="image"
					label="Image URL"
					variant="outlined"
				/>
				<Button onClick={() => editProduct(id, product)} variant="outlined">
					SAVE
				</Button>
			</Box>
		</>
	);
};

export default EditProduct;
