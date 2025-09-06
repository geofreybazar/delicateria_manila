"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

const SignUpNowButton = () => {
  return (
    <Button
      color='customorange'
      variant='outlined'
      loadingPosition='start'
      size='large'
      onClick={() => signIn()}
    >
      Sign Up
    </Button>
  );
};

export default SignUpNowButton;
