"use client";

import { Button } from "@mui/material";
import Link from "next/link";

const ShopNowButton = () => {
  return (
    <Link href='/shop'>
      <Button
        color='customorange'
        variant='contained'
        loadingPosition='start'
        size='large'
      >
        Shop
      </Button>
    </Link>
  );
};

export default ShopNowButton;
