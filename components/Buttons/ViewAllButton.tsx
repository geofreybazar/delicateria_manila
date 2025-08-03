import { Button } from "@mui/material";
import React from "react";

type SizeType = "small" | "medium" | "large" | undefined;

const ViewAllButton = ({ size }: { size: SizeType }) => {
  return (
    <Button
      //   onClick={handleCreateCheckoutSession}
      //   loading={isLoading}
      color='customorange'
      variant='contained'
      loadingPosition='start'
      size={size}
    >
      View All
    </Button>
  );
};

export default ViewAllButton;
