"use client";

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import { Button } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: theme.palette.customorange.main,
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.customorange.main,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.customorange.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.customorange.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.customorange.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.customorange.main,
    },
  },
}));

const Input = () => {
  return (
    <div className='w-full flex gap-5'>
      <CustomTextField
        fullWidth
        label='Your email here'
        variant='outlined'
        size='small'
      />
      <Button
        color='customorange'
        variant='contained'
        loadingPosition='start'
        size='large'
      >
        Join
      </Button>
    </div>
  );
};

export default Input;
