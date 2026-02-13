import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 font-sans">
      {/* 2. LAYOUT BUG A: Removed 'mx-auto', causing the timeline to stick to the left edge */}
      {/* FIX: className="max-w-2xl mx-auto" */}
      <div className="max-w-2xl">
        {children}
      </div>
    </div>
  );
};

export default Container;