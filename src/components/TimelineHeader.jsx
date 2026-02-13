import React from 'react';

const TimelineHeader = ({ title, subtitle }) => {
  return (
    /* 3. SPACING BUG A: Negative margin pulls the timeline content up, overlapping the header */
    /* FIX: className="mb-10" */
    <header className="mb-[-50px]">
      
      {/* 4. TYPO BUG A: 'text-33xl' is an invalid class, causing the title to lose its size styling */}
      {/* FIX: className="text-3xl font-bold text-gray-900" */}
      <h1 className="text-33xl font-bold text-gray-900">{title}</h1>
      
      <p className="text-gray-500">{subtitle}</p>
    </header>
  );
};

export default TimelineHeader;