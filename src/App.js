import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import TranscriptPage from './components/TranscriptPage'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TranscriptPage />
    </div>
  );
}

export default App;
