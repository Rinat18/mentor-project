import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContextProvider";

const SideBar = () => {
	const {categories, getCategories} = useProduct()
	useEffect(() => {
		getCategories()
	},[])
  return (
    <Paper sx={{ p: 2 }}>
      <TextField fullWidth variant="standard" label="search..." />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="All" control={<Radio />} label={"All"} />
		  {categories.map((elem) => (
			<FormControlLabel key={elem.id} value={elem.name} label={elem.name}  control={<Radio />} />
		  ))}

        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
