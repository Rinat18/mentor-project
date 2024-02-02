import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ title, description, price, image }) => {
	return (
		<>
			{/* <li>
				<img src={image} alt="image" />
				<h2>{title}</h2>
				<h3>{description}</h3>
				<h3>{price}</h3>
			</li> */}
			<Card
				sx={{
					height: 450,
					width: { md: "30vw", lg: "19vw" },
					boxShadow: "none",
					margin: "2%",
				}}
			>
				<CardActionArea>
					<CardMedia
						sx={{
							height: 240,
							borderRadius: 4,
						}}
						image={image}
					/>
				</CardActionArea>
				<CardContent
					sx={{
						padding: "20px 5px 0 5px",
					}}
				>
					<Typography
						variant="h5"
						fontSize={20}
						fontWeight={700}
						component="div"
					>
						{title}
					</Typography>
					<Typography color="black" fontSize={24} fontWeight={700}>
						{description}
					</Typography>
					<Stack>
						<Rating name="half-rating" defaultValue={0} precision={1} />
					</Stack>
					<Typography color="black" fontSize={24} fontWeight={700}>
						{price}$
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default ProductCard;
