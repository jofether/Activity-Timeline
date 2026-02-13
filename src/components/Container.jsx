import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
