import React from "react";

const loading = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center p-4'
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className='text-center'>
        {/* Animated Chef Hat Icon */}
        <div className='relative mb-8'>
          <div className='w-24 h-24 mx-auto'>
            {/* Chef Hat Base */}
            <div
              className='absolute bottom-0 w-24 h-6 bg-white rounded-full shadow-lg animate-pulse'
              style={{ borderColor: "#252527" }}
            ></div>
            {/* Chef Hat Top */}
            <div
              className='absolute bottom-4 w-20 h-16 bg-white rounded-t-full mx-2 shadow-lg border-2'
              style={{ borderColor: "#252527" }}
            >
              {/* Animated pleats */}
              <div
                className='absolute top-2 left-2 w-2 h-8 rounded animate-pulse'
                style={{ backgroundColor: "#F7F7F7" }}
              ></div>
              <div
                className='absolute top-1 left-6 w-2 h-10 rounded animate-pulse delay-75'
                style={{ backgroundColor: "#F7F7F7" }}
              ></div>
              <div
                className='absolute top-2 left-10 w-2 h-8 rounded animate-pulse delay-100'
                style={{ backgroundColor: "#F7F7F7" }}
              ></div>
              <div
                className='absolute top-1 left-14 w-2 h-9 rounded animate-pulse delay-150'
                style={{ backgroundColor: "#F7F7F7" }}
              ></div>
            </div>

            {/* Floating meat/ingredient animations */}
            <div
              className='absolute -top-4 -left-8 w-3 h-3 rounded-full animate-bounce delay-75'
              style={{ backgroundColor: "#F18B21" }}
            ></div>
            <div
              className='absolute -top-2 left-24 w-2 h-2 rounded-full animate-bounce delay-150'
              style={{ backgroundColor: "#252527" }}
            ></div>
            <div
              className='absolute top-2 -right-4 w-2.5 h-2.5 rounded-full animate-bounce delay-300'
              style={{ backgroundColor: "#F18B21" }}
            ></div>
          </div>
        </div>

        {/* Brand Logo Area */}
        <div className='mb-8'>
          <div
            className='w-32 h-16 mx-auto mb-4 rounded-lg shadow-md flex items-center justify-center animate-pulse'
            style={{ backgroundColor: "#252527" }}
          >
            <div className='text-white font-bold text-lg tracking-wider'>
              DELICATERIA
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className='mb-8'>
          <div className='flex justify-center items-center space-x-3 mb-4'>
            <div
              className='w-3 h-3 rounded-full animate-bounce'
              style={{ backgroundColor: "#F18B21" }}
            ></div>
            <div
              className='w-3 h-3 rounded-full animate-bounce delay-75'
              style={{ backgroundColor: "#252527" }}
            ></div>
            <div
              className='w-3 h-3 rounded-full animate-bounce delay-150'
              style={{ backgroundColor: "#F18B21" }}
            ></div>
          </div>
          <p className='font-medium' style={{ color: "#252527" }}>
            Preparing your gourmet experience...
          </p>
        </div>

        {/* Decorative Meat Icons */}
        <div className='flex justify-center space-x-8 opacity-40'>
          {/* Steak Icon */}
          <div className='relative animate-pulse delay-200'>
            <div
              className='w-8 h-6 rounded-lg transform rotate-12'
              style={{ backgroundColor: "#F18B21" }}
            >
              <div className='absolute top-1 left-1 w-2 h-1 bg-white rounded-full opacity-60'></div>
              <div className='absolute bottom-1 right-1 w-1.5 h-1 bg-white rounded-full opacity-60'></div>
            </div>
          </div>

          {/* Sausage Icon */}
          <div className='animate-pulse delay-300'>
            <div
              className='w-8 h-3 rounded-full transform -rotate-12'
              style={{ backgroundColor: "#252527" }}
            >
              <div className='absolute top-0.5 left-1 w-1 h-2 bg-white rounded-full opacity-40'></div>
            </div>
          </div>

          {/* Meat Cut Icon */}
          <div className='relative animate-pulse delay-500'>
            <div
              className='w-6 h-8 rounded-t-full'
              style={{ backgroundColor: "#F18B21" }}
            >
              <div className='absolute top-2 left-1 w-1 h-3 bg-white rounded opacity-50'></div>
              <div className='absolute top-1 right-1 w-1 h-4 bg-white rounded opacity-50'></div>
            </div>
          </div>
        </div>

        {/* Spinning Loading Ring */}
        <div className='mt-8 flex justify-center'>
          <div
            className='w-12 h-12 border-4 border-gray-200 rounded-full animate-spin'
            style={{ borderTopColor: "#F18B21" }}
          ></div>
        </div>

        {/* Loading Progress Dots */}
        <div className='mt-6 flex justify-center space-x-2'>
          <div
            className='w-2 h-2 rounded-full animate-pulse'
            style={{ backgroundColor: "#F18B21" }}
          ></div>
          <div
            className='w-2 h-2 rounded-full animate-pulse delay-75'
            style={{ backgroundColor: "#252527" }}
          ></div>
          <div
            className='w-2 h-2 rounded-full animate-pulse delay-150'
            style={{ backgroundColor: "#F18B21" }}
          ></div>
          <div
            className='w-2 h-2 rounded-full animate-pulse delay-200'
            style={{ backgroundColor: "#252527" }}
          ></div>
          <div
            className='w-2 h-2 rounded-full animate-pulse delay-300'
            style={{ backgroundColor: "#F18B21" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
