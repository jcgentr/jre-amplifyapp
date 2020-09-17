import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
        <button className="epLink">#1536 - Edward Snowden</button>
      </div>
      <div className="transcriptContainer">
        <iframe 
          title="p1536"
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/_Rl82OQDoOc" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
