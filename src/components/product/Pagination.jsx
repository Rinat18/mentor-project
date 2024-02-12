import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({count, page,handleChange}) => {
  return (
    <Stack spacing={2}>
		<Typography>Page:{page}</Typography>
      <Pagination onChange={handleChange} count={count} color="primary" />
    </Stack>
  );
};

export default PaginationControlled;
