import React from 'react';
import TimelineEvent from './TimelineEvent';

const Timeline = ({ events }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, idx) => (
          <TimelineEvent 
            key={idx} 
            event={event} 
            isLast={idx === events.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
