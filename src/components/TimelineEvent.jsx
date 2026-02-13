import React from 'react';

const TimelineEvent = ({ event, isLast }) => {
  const getDotColor = (type) => {
    switch(type) {
      case 'success': return 'bg-green-500 ring-green-200';
      case 'error': return 'bg-red-500 ring-red-200';
      case 'info': return 'bg-blue-500 ring-blue-200';
      default: return 'bg-gray-400 ring-gray-200';
    }
  };

  return (
    <li className="relative pb-8">
      {/* VERTICAL LINE CONNECTOR */}
      {!isLast && (
        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
      )}
      
      <div className="relative flex space-x-3">
        {/* DOT INDICATOR */}
        <div>
          <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${getDotColor(event.type)}`}>
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
          </span>
        </div>
        
        {/* CONTENT */}
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p className="text-sm font-medium text-gray-900">{event.title}</p>
            <p className="text-sm text-gray-500 mt-1">{event.desc}</p>
          </div>
          <div className="text-right text-sm text-gray-400 whitespace-nowrap">
            <time>{event.time}</time>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineEvent;
