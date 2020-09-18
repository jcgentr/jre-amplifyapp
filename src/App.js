import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import TranscriptPage from './components/TranscriptPage'

function App() {
  const [podcast, setPodcast] = React.useState(1536)

  return (
    <div className="App">
      <Sidebar podcast={podcast} setPodcast={setPodcast} />
      <TranscriptPage podcast={podcast} />
    </div>
  );
}

export default App;
