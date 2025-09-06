"use client";

import { Button } from "@mui/material";
import Link from "next/link";

const ShopNowButton = () => {
  return (
    <Button
      component={Link}
      href='/shop'
      color='customorange'
      variant='contained'
      loadingPosition='start'
      size='large'
    >
      Shop
    </Button>
  );
};

export default ShopNowButton;
