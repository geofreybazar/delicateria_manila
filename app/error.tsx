"use client";

import Link from "next/link";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div
      className='min-h-screen flex items-center justify-center p-4'
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className='text-center max-w-2xl mx-auto'>
        {/* Error Icon Animation */}
        <div className='mb-8'>
          <div className='relative'>
            {/* Broken Plate Icon */}
            <div className='w-32 h-32 mx-auto mb-4 relative'>
              {/* Plate base */}
              <div
                className='w-28 h-28 rounded-full border-8 mx-auto animate-pulse'
                style={{ borderColor: "#252527" }}
              >
                {/* Crack lines */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div
                    className='w-16 h-0.5 transform rotate-45 animate-pulse'
                    style={{ backgroundColor: "#F18B21" }}
                  ></div>
                  <div
                    className='w-12 h-0.5 absolute transform -rotate-12 animate-pulse'
                    style={{
                      backgroundColor: "#F18B21",
                      animationDelay: "200ms",
                    }}
                  ></div>
                </div>
              </div>

              {/* Scattered pieces */}
              <div
                className='absolute -top-2 -right-2 w-6 h-6 rounded-full animate-bounce'
                style={{
                  backgroundColor: "#252527",
                  animationDelay: "100ms",
                }}
              ></div>
              <div
                className='absolute -bottom-2 -left-2 w-4 h-4 rounded-full animate-bounce'
                style={{
                  backgroundColor: "#F18B21",
                  animationDelay: "300ms",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className='mb-8'>
          <h1 className='text-5xl font-bold mb-4' style={{ color: "#252527" }}>
            Oops! Something Went Wrong
          </h1>
          <p className='text-xl mb-4' style={{ color: "#252527" }}>
            Our kitchen seems to have encountered an unexpected issue.
          </p>
          <p className='text-lg opacity-75 mb-6' style={{ color: "#252527" }}>
            Don{"'"}t worry - our chef is already working on fixing this!
          </p>

          {/* Error details for development */}
          {process.env.NODE_ENV === "development" && (
            <details className='text-left bg-red-50 p-4 rounded-lg mb-6 text-sm'>
              <summary className='cursor-pointer font-semibold text-red-600 mb-2'>
                Error Details (Development Only)
              </summary>
              <pre className='text-red-700 whitespace-pre-wrap overflow-auto'>
                {error.message}
              </pre>
              {error.digest && (
                <p className='text-red-600 mt-2'>
                  <strong>Error ID:</strong> {error.digest}
                </p>
              )}
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
          <button
            onClick={reset}
            className='px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200 min-w-40'
            style={{ backgroundColor: "#F18B21" }}
          >
            Try Again
          </button>

          <Link href='/'>
            <button
              className='px-8 py-3 rounded-lg font-semibold border-2 hover:opacity-90 transition-opacity duration-200 min-w-40'
              style={{
                backgroundColor: "transparent",
                borderColor: "#252527",
                color: "#252527",
              }}
            >
              Return Home
            </button>
          </Link>
        </div>

        {/* Helpful Suggestions */}
        <div className='mb-8'>
          <h3
            className='text-lg font-semibold mb-4'
            style={{ color: "#252527" }}
          >
            What you can do:
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-left'>
            <div
              className='p-4 rounded-lg'
              style={{ backgroundColor: "white" }}
            >
              <div
                className='w-8 h-8 rounded-full flex items-center justify-center mb-2'
                style={{ backgroundColor: "#F18B21" }}
              >
                <span className='text-white font-bold'>1</span>
              </div>
              <h4 className='font-semibold mb-1' style={{ color: "#252527" }}>
                Refresh the page
              </h4>
              <p className='text-sm opacity-75' style={{ color: "#252527" }}>
                Sometimes a simple refresh fixes the issue
              </p>
            </div>

            <div
              className='p-4 rounded-lg'
              style={{ backgroundColor: "white" }}
            >
              <div
                className='w-8 h-8 rounded-full flex items-center justify-center mb-2'
                style={{ backgroundColor: "#F18B21" }}
              >
                <span className='text-white font-bold'>2</span>
              </div>
              <h4 className='font-semibold mb-1' style={{ color: "#252527" }}>
                Check your connection
              </h4>
              <p className='text-sm opacity-75' style={{ color: "#252527" }}>
                Make sure you have a stable internet connection
              </p>
            </div>

            <div
              className='p-4 rounded-lg'
              style={{ backgroundColor: "white" }}
            >
              <div
                className='w-8 h-8 rounded-full flex items-center justify-center mb-2'
                style={{ backgroundColor: "#F18B21" }}
              >
                <span className='text-white font-bold'>3</span>
              </div>
              <h4 className='font-semibold mb-1' style={{ color: "#252527" }}>
                Contact support
              </h4>
              <p className='text-sm opacity-75' style={{ color: "#252527" }}>
                If the problem persists, let us know
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className='border-t pt-6'
          style={{ borderColor: "#252527", opacity: 0.2 }}
        >
          <p className='text-base mb-2' style={{ color: "#252527" }}>
            Need immediate assistance?
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:support@delicateriamanila.com'
              className='text-base hover:underline transition-all duration-200'
              style={{ color: "#F18B21" }}
            >
              support@delicateriamanila.com
            </a>
            <a
              href='tel:+63123456789'
              className='text-base hover:underline transition-all duration-200'
              style={{ color: "#F18B21" }}
            >
              +63 123 456 789
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className='absolute top-10 left-10 w-2 h-2 rounded-full animate-ping opacity-30'
          style={{ backgroundColor: "#F18B21" }}
        ></div>
        <div
          className='absolute top-20 right-16 w-3 h-3 rounded-full animate-pulse opacity-20'
          style={{ backgroundColor: "#252527" }}
        ></div>
        <div
          className='absolute bottom-16 left-20 w-2 h-2 rounded-full animate-bounce opacity-25'
          style={{ backgroundColor: "#F18B21" }}
        ></div>
      </div>
    </div>
  );
};

export default ErrorPage;
