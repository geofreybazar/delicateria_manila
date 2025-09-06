const LoadingFallback = () => {
  return (
    <div className='h-full w-full flex flex-col md:flex-row items-center justify-center gap-5 p-6 xl:p-0 animate-pulse'>
      {/* Left skeleton */}
      <div className='w-full xl:w-1/3 h-full flex flex-col gap-5'>
        <div className='h-6 w-40 bg-gray-300 rounded-md' /> {/* Title */}
        <div className='h-4 w-64 bg-gray-200 rounded-md' /> {/* Subtitle */}
        <div className='h-4 w-52 bg-gray-200 rounded-md' /> {/* Link text */}
        <div className='flex flex-col gap-2'>
          <div className='h-4 w-20 bg-gray-200 rounded-md' /> {/* Label */}
          <div className='h-12 w-full bg-gray-300 rounded-xl' />{" "}
          {/* Disabled email input */}
        </div>
      </div>

      {/* Right skeleton */}
      <div className='w-full xl:w-1/3 h-full flex flex-col gap-4'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='flex flex-col gap-2'>
            <div className='h-4 w-28 bg-gray-200 rounded-md' /> {/* Label */}
            <div className='h-12 w-full bg-gray-300 rounded-xl' /> {/* Input */}
          </div>
        ))}
        <div className='h-12 w-full bg-gray-400 rounded-full mt-2' />{" "}
        {/* Button */}
      </div>
    </div>
  );
};

export default LoadingFallback;
