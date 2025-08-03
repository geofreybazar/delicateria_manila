"use client";

import { Button } from "@mui/material";

type SizeType = "small" | "medium" | "large" | undefined;

const BuyNowButton = ({ size }: { size: SizeType }) => {
  return (
    <Button
      //   onClick={handleCreateCheckoutSession}
      //   loading={isLoading}
      color='customorange'
      variant='contained'
      loadingPosition='start'
      size={size}
      //   className=' text-center transition text-lg shadow-md rounded-md w-full p-2'
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
