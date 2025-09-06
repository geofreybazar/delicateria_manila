const OrderLoadingSkeleton = () => {
  return (
    <div className='animate-pulse p-6'>
      {/* Header skeleton */}
      <div className='p-6 pb-4 border-b border-gray-200 bg-gray-50 rounded-t-xl mb-6'>
        <div className='flex justify-between items-start'>
          <div>
            <div className='h-6 w-40 bg-gray-200 rounded mb-2'></div>
            <div className='h-4 w-32 bg-gray-200 rounded mb-3'></div>
            <div className='flex gap-4'>
              <div className='h-5 w-20 bg-gray-200 rounded-full'></div>
              <div className='h-4 w-28 bg-gray-200 rounded'></div>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='h-8 w-8 bg-gray-200 rounded'></div>
            <div className='h-8 w-8 bg-gray-200 rounded'></div>
            <div className='h-8 w-8 bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Column Skeleton */}
        <div className='lg:col-span-2 space-y-4'>
          <div className='h-5 w-32 bg-gray-200 rounded'></div>

          {/* Fake item rows */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className='flex items-center space-x-4 border rounded-lg p-4'
            >
              <div className='w-16 h-16 bg-gray-200 rounded'></div>
              <div className='flex-1 space-y-2'>
                <div className='h-4 w-40 bg-gray-200 rounded'></div>
                <div className='h-3 w-32 bg-gray-200 rounded'></div>
                <div className='flex justify-between'>
                  <div className='h-3 w-10 bg-gray-200 rounded'></div>
                  <div className='h-4 w-16 bg-gray-200 rounded'></div>
                </div>
              </div>
            </div>
          ))}

          {/* Order Summary skeleton */}
          <div className='bg-white border border-gray-200 rounded-lg p-5 space-y-3'>
            <div className='h-5 w-32 bg-gray-200 rounded'></div>
            <div className='flex justify-between'>
              <div className='h-4 w-20 bg-gray-200 rounded'></div>
              <div className='h-4 w-16 bg-gray-200 rounded'></div>
            </div>
            <div className='flex justify-between'>
              <div className='h-4 w-20 bg-gray-200 rounded'></div>
              <div className='h-4 w-16 bg-gray-200 rounded'></div>
            </div>
            <div className='flex justify-between pt-3 mt-3 border-t'>
              <div className='h-5 w-16 bg-gray-200 rounded'></div>
              <div className='h-5 w-20 bg-gray-200 rounded'></div>
            </div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className='space-y-4'>
          <div className='bg-white border border-gray-200 rounded-lg p-5 space-y-3'>
            <div className='h-5 w-32 bg-gray-200 rounded mb-2'></div>
            <div className='h-4 w-48 bg-gray-200 rounded'></div>
            <div className='h-4 w-40 bg-gray-200 rounded'></div>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg p-5 space-y-3'>
            <div className='h-5 w-32 bg-gray-200 rounded mb-2'></div>
            <div className='h-4 w-48 bg-gray-200 rounded'></div>
            <div className='h-4 w-40 bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLoadingSkeleton;
