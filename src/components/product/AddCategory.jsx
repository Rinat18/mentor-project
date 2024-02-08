import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";

const AddCategory = (props) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    display: "flex",
    border: "1px solid black",
    backgroundColor: "white",
  };
  const {open, handleClose} = props
  const { createCategory } = useProduct();
  const [category, setCategory] = useState();
  const handleClick = () => {
    if (!category) {
      alert("ыаафаоаооа");
      return
    } else {
      const newCategory = {
        name: category,
      };
      setCategory("")
      createCategory(newCategory);
    }
    handleClose()
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Box sx={style}>
        <Typography id="modal-modal-title">Добавить категорию</Typography>
        <TextField
          fullWidth
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button onClick={handleClick}>Добавить</Button>
      </Box>
    </Modal>
  );
};

export default AddCategory;
