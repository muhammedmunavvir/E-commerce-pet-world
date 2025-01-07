import React from 'react';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};
