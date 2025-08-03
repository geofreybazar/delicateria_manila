import { Skeleton } from "@mui/material";
import React from "react";

const Fallback = () => {
  return (
    <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-2 3xl:grid-cols-4'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Skeleton
            variant='rectangular'
            className='w-full rounded-md'
            height={200}
          />
          <Skeleton
            variant='text'
            width='80%'
            height={20}
            className='mx-auto'
          />
        </div>
      ))}
    </div>
  );
};

export default Fallback;
