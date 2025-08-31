const MyProfileLoadingFallback = () => {
  return (
    <div className='pt-2 w-full flex justify-center gap-5'>
      {/* Left card - Account Skeleton */}
      <div className='w-1/2 shadow-xl bg-offwhite text-ashBlack border border-gray-200 rounded-md p-3'>
        <div className='h-6 w-32 bg-gray-300 rounded mb-4 animate-pulse'></div>
        <div className='flex flex-col gap-2'>
          <div className='h-4 w-40 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-44 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-48 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-36 bg-gray-200 rounded animate-pulse'></div>
        </div>
      </div>

      {/* Right card - Active Orders Skeleton */}
      <div className='w-1/2 shadow-xl bg-offwhite text-ashBlack border border-gray-200 rounded-md p-3'>
        <div className='h-6 w-32 bg-gray-300 rounded mb-4 animate-pulse'></div>
        <div className='flex flex-col gap-3'>
          <div className='h-4 w-40 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-44 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-48 bg-gray-200 rounded animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileLoadingFallback;
