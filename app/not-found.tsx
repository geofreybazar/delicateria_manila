import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center p-4'
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className='text-center max-w-2xl mx-auto'>
        {/* 404 Animation */}
        <div className='mb-8'>
          <div className='relative'>
            {/* Large 404 Text */}
            <h1
              className='text-9xl font-bold opacity-20 select-none'
              style={{ color: "#252527" }}
            >
              404
            </h1>

            {/* Floating Food Icons */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='relative w-32 h-32'>
                {/* Meat Icon */}
                <div
                  className='absolute top-2 left-4 w-6 h-8 rounded-lg animate-bounce'
                  style={{
                    backgroundColor: "#F18B21",
                    animationDelay: "0ms",
                  }}
                >
                  <div className='absolute top-1 left-1 w-1 h-2 bg-white rounded opacity-60'></div>
                </div>

                {/* Cheese Icon */}
                <div
                  className='absolute top-8 right-2 animate-bounce'
                  style={{ animationDelay: "200ms" }}
                >
                  <div
                    className='w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent'
                    style={{ borderBottomColor: "#F18B21" }}
                  ></div>
                </div>

                {/* Wine Glass */}
                <div
                  className='absolute bottom-4 left-2 animate-bounce'
                  style={{ animationDelay: "400ms" }}
                >
                  <div
                    className='w-1 h-6 mx-auto'
                    style={{ backgroundColor: "#252527" }}
                  ></div>
                  <div
                    className='w-6 h-6 border-2 rounded-b-full'
                    style={{ borderColor: "#252527" }}
                  ></div>
                </div>

                {/* Bread */}
                <div
                  className='absolute bottom-2 right-6 w-8 h-3 rounded-full transform rotate-12 animate-bounce'
                  style={{
                    backgroundColor: "#252527",
                    animationDelay: "600ms",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className='mb-8'>
          <h2 className='text-4xl font-bold mb-4' style={{ color: "#252527" }}>
            Page Not Found
          </h2>
          <p className='text-xl mb-2' style={{ color: "#252527" }}>
            Oops! This delicacy seems to have gone missing from our menu.
          </p>
          <p className='text-lg opacity-75' style={{ color: "#252527" }}>
            The page you{"'"}re looking for doesn{"'"}t exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
          <Link href='/'>
            <button
              className='px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200 min-w-40'
              style={{ backgroundColor: "#F18B21" }}
            >
              Return Home
            </button>
          </Link>

          <Link href='/shop'>
            <button
              className='px-8 py-3 rounded-lg font-semibold text-white border-2 hover:opacity-90 transition-opacity duration-200 min-w-40'
              style={{
                backgroundColor: "transparent",
                borderColor: "#252527",
                color: "#252527",
              }}
            >
              Browse Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
