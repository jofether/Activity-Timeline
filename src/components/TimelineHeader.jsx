import React from 'react';

const TimelineHeader = ({ title, subtitle }) => {
  return (
    <header className="mb-10">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </header>
  );
};

export default TimelineHeader;
