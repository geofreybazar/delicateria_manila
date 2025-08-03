const LoadingFallback = () => {
  return (
    <div className='bg-white shadow rounded p-2 w-full animate-pulse'>
      <div className='bg-gray-300 h-40 w-full rounded'></div>
      <div className='h-4 bg-gray-300 rounded mt-4 w-3/4'></div>
      <div className='h-4 bg-gray-300 rounded mt-2 w-1/2'></div>
    </div>
  );
};

export default LoadingFallback;
