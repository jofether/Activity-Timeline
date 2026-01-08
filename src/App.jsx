import React from 'react';

function App() {
  const events = [
    { time: 'Just now', title: 'Deployment Successful', desc: 'Production build v2.4.0 is live.', type: 'success' },
    { time: '2 hours ago', title: 'New Bug Reported', desc: 'Ticket #404: UI misalignment on Login page.', type: 'error' },
    { time: '5 hours ago', title: 'Pull Request Merged', desc: 'feat: Add dark mode toggle by @jofether.', type: 'info' },
    { time: 'Yesterday', title: 'Database Backup', desc: 'Automated snapshot created successfully.', type: 'neutral' },
    { time: '2 days ago', title: 'Weekly Meeting', desc: 'Discussed roadmap for Q3.', type: 'neutral' },
  ];

  const getDotColor = (type) => {
    switch(type) {
      case 'success': return 'bg-green-500 ring-green-200';
      case 'error': return 'bg-red-500 ring-red-200';
      case 'info': return 'bg-blue-500 ring-blue-200';
      default: return 'bg-gray-400 ring-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">System Activity</h1>
          <p className="text-gray-500">Recent events and logs from your application.</p>
        </header>

        {/* TIMELINE CONTAINER */}
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {events.map((event, idx) => (
              <li key={idx} className="relative pb-8">
                
                {/* VERTICAL LINE CONNECTOR */}
                {/* FUTURE BUG: Remove this span to break the timeline continuity */}
                {idx !== events.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                ) : null}
                
                <div className="relative flex space-x-3">
                  
                  {/* DOT INDICATOR */}
                  {/* FUTURE BUG: Remove '-ml-1.5' to detach dot from line */}
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
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;