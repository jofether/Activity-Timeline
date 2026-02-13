import React from 'react';
import { Container, TimelineHeader, Timeline } from './components';

function App() {
  const events = [
    { time: 'Just now', title: 'Deployment Successful', desc: 'Production build v2.4.0 is live.', type: 'success' },
    { time: '2 hours ago', title: 'New Bug Reported', desc: 'Ticket #404: UI misalignment on Login page.', type: 'error' },
    { time: '5 hours ago', title: 'Pull Request Merged', desc: 'feat: Add dark mode toggle by @jofether.', type: 'info' },
    { time: 'Yesterday', title: 'Database Backup', desc: 'Automated snapshot created successfully.', type: 'neutral' },
    { time: '2 days ago', title: 'Weekly Meeting', desc: 'Discussed roadmap for Q3.', type: 'neutral' },
    { time: '3 days ago', title: 'Security Audit Passed', desc: 'All systems cleared for production deployment.', type: 'success' },
    { time: '1 week ago', title: 'User Feedback Collected', desc: '127 responses received from beta testers.', type: 'info' },
  ];

  return (
    <Container>
      <TimelineHeader 
        title="System Activity"
        subtitle="Recent events and logs from your application."
      />
      <Timeline events={events} />
    </Container>
  );
}

export default App;