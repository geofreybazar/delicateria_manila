const ShopFallBack = () => {
  return (
    <div className='flex gap-4 w-full'>
      <div className='pr-5 w-1/6 animate-pulse'>
        <div className='flex flex-col'>
          <div className='h-6 bg-gray-300 rounded mb-4 w-3/4'></div>

          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className='flex items-center gap-2 mb-2'>
              <div className='h-4 w-4 bg-gray-300 rounded'></div>
              <div className='h-4 bg-gray-300 rounded w-2/3'></div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default ShopFallBack;
