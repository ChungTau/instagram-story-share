import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShareToInstagram from './ShareToInstagram';

function App() {
  return (
    <div className="App">
      <h1>React App to Share to Instagram Stories</h1>
      <ShareToInstagram mediaUrl="https://us.123rf.com/450wm/joshuaraineyphotography/joshuaraineyphotography1602/joshuaraineyphotography160200323/52365945-la-photographie-mobile-a-gagn%C3%A9-du-terrain-au-cours-des-derni%C3%A8res-ann%C3%A9es-et-cette-image-d-un.jpg?ver=6" />
    </div>
  );
}

export default App;
