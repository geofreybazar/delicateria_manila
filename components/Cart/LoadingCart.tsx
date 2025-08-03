import CircularProgress from "@mui/material/CircularProgress";

const LoadingCart = () => {
  return (
    <div className='w-[520px] h-full'>
      <div className='animate-fade-in h-full flex flex-col justify-center items-center text-center px-4'>
        <p className='text-lg font-medium mb-4 animate-pulse text-gray-700'>
          Please wait, your cart is loading...
        </p>
        <CircularProgress
          size={50}
          thickness={4.5}
          style={{ color: "#F18B21" }}
        />
      </div>
    </div>
  );
};

export default LoadingCart;
