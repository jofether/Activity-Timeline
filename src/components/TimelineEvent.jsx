import React from 'react';

const TimelineEvent = ({ event, isLast }) => {
  const getDotColor = (type) => {
    switch(type) {
      /* 5. COLOR BUG B: Swapped 'success' green for 'gray', losing semantic meaning */
      /* FIX: case 'success': return 'bg-green-500 ring-green-200'; */
      case 'success': return 'bg-gray-400 ring-gray-200';
      
      case 'error': return 'bg-red-500 ring-red-200';
      case 'info': return 'bg-blue-500 ring-blue-200';
      default: return 'bg-gray-400 ring-gray-200';
    }
  };

  return (
    /* 6. LAYERS BUG A: Removed 'relative', so the absolute connector line positions itself relative to the body/container instead of this item */
    /* FIX: className="relative pb-8" */
    <li className="pb-8">
      
      {/* VERTICAL LINE CONNECTOR */}
      {!isLast && (
        /* 7. LAYERS BUG B: Removed 'absolute', forcing the line to take up layout space and push content down */
        /* FIX: className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" */
        <span className="top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
      )}
      
      {/* 8. LAYOUT BUG B: Changed 'flex' to 'block', causing the dot and text to stack vertically */ }
      {/* FIX: className="relative flex space-x-3" */}
      <div className="relative block space-x-3">
        
        {/* DOT INDICATOR */}
        <div>
          {/* 9. TYPO BUG B: 'ringg-8' is a typo, so the white border around the dot disappears */ }
          {/* FIX: className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${getDotColor(event.type)}`} */}
          <span className={`h-8 w-8 rounded-full flex items-center justify-center ringg-8 ring-white ${getDotColor(event.type)}`}>
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
          </span>
        </div>
        
        {/* CONTENT */}
        {/* 10. SPACING BUG B: Removed 'pt-1.5', causing the text to be misaligned vertically with the dot */ }
        {/* FIX: className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4" */}
        <div className="min-w-0 flex-1 flex justify-between space-x-4">
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