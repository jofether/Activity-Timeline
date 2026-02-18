import React from 'react';

const TimelineHeader = ({ title, subtitle }) => {
  return (
    <header className="mb-[-50px]">
      
      <h1 className="text-33xl font-bold text-gray-900">{title}</h1>
      
      <p className="text-gray-500">{subtitle}</p>
    </header>
  );
};

export default TimelineHeader;