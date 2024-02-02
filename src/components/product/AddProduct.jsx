import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddProduct = () => {
	const { addProduct } = useProduct();
	const [product, setProduct] = useState({
		title: "",
		description: "",
		price: 0,
		image: "",
	});
	function handleInput(e) {
		if (e.target.name === "price") {
			const obj = {
				...product,
				[e.target.name]: Number(e.target.value),
			};
			setProduct(obj);
		} else {
			const obj = {
				...product,
				[e.target.name]: e.target.value,
			};
			setProduct(obj);
		}
	}
	const handleClick = () => {
		addProduct(product);
	};

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
					ADMIN PAGE
				</Typography>
				<TextField
					onChange={handleInput}
					fullWidth
					name="title"
					label="Title"
					variant="outlined"
				/>
				<TextField
					onChange={handleInput}
					fullWidth
					name="description"
					label="Description"
					variant="outlined"
				/>
				<TextField
					onChange={handleInput}
					fullWidth
					name="price"
					label="Price"
					variant="outlined"
				/>
				<TextField
					onChange={handleInput}
					fullWidth
					name="image"
					label="Image URL"
					variant="outlined"
				/>
				<Button onClick={handleClick} variant="outlined">
					ADD
				</Button>
			</Box>
		</>
	);
};

export default AddProduct;