"use client";

// Simple Spinner Loader
export function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Spinning gradient ring */}
        <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-orange-500 border-r-rose-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

// Full Page Loader
export function FullPageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-orange-950/20 dark:to-rose-950/20 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl transform -rotate-6 mx-auto mb-6 animate-float shadow-2xl">
          SB
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-orange-500 border-r-rose-600 rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <p className="text-gray-600 dark:text-gray-400 font-semibold">
          Loading...
        </p>
      </div>
    </div>
  );
}

// Loading Dots
export function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-rose-600 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-pink-600 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
}

// Pulse Loader (for skeleton screens)
export function PulseLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded"></div>
      <div className="h-4 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded w-5/6"></div>
      <div className="h-4 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded w-4/6"></div>
    </div>
  );
}

// Button Loading State
export function ButtonLoader() {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span>Loading...</span>
    </div>
  );
}

// Card Skeleton Loader
export function CardLoader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded w-3/4"></div>
          <div className="h-3 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded"></div>
        <div className="h-3 bg-gradient-to-r from-orange-200 to-rose-200 dark:from-orange-900/30 dark:to-rose-900/30 rounded w-5/6"></div>
      </div>
    </div>
  );
}

// Export default as the simple spinner
export default Loader;
