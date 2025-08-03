const ProductsFallback = () => {
  return (
    <div className='flex-1 w-5/6'>
      <div className='mb-5 text-gray-400 animate-pulse'>
        <span>Loading filtered products...</span>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className='flex flex-col border border-gray-300 bg-gray-100 shadow-sm animate-pulse h-full'
          >
            <div className='h-40 md:h-[180px] w-full bg-gray-300'></div>
            <div className='p-4 flex flex-col gap-2'>
              <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
              <div className='h-4 w-1/2 bg-gray-300 rounded'></div>
              <div className='h-8 w-full bg-gray-300 rounded mt-4'></div>
              <div className='h-8 w-full bg-gray-300 rounded'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsFallback;
