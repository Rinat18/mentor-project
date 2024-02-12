import React, { useEffect, useState } from 'react';
import { useProduct } from '../context/ProductContextProvider';
import { Box } from '@mui/material';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';
import PaginationControlled from './Pagination';

const ProductList = () => {
	//! SEARCH
	const { getProducts, products } = useProduct();
	const [searchParams, setSearchParams] = useSearchParams();
	useEffect(() => {
		getProducts();
	}, [searchParams]);
	// ! PAGINATION
	const [page, setPage] = useState(1);
	const itemPerPage = 3;
	const count = Math.ceil(products.length / itemPerPage);
	console.log(count);
	const currentData = () => {
		const begin = (page - 1) * itemPerPage;
		const end = begin + itemPerPage;
		return products.slice(begin, end);
	};
	console.log(currentData());
	const handleChange = (e, value) => {
		setPage(value);
	};
	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}>
				{currentData().map((elem) => (
					<ProductCard key={elem.id} elem={elem} />
				))}
			</Box>
			<PaginationControlled count={count} page={page} handleChange={handleChange} />
		</div>
	);
};

export default ProductList;
