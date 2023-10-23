import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShareToInstagram from './ShareToInstagram';

function App() {
  return (
    <div className="App">
      <h1>React App to Share to Instagram Stories</h1>
      <ShareToInstagram mediaUrl="https://example.com/path/to/your/image.jpg" />
    </div>
  );
}

export default App;
