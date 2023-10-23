import { useEffect } from 'react';
import './App.css';
import ShareToInstagramStory from './ShareToInstagramStory';

function App() {
  useEffect(() => {
    // 載入 Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      //@ts-ignore
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);
  return (
    <div className="App">
      <h1>React App to Share to Instagram Stories</h1>
      <ShareToInstagramStory/>
    </div>
  );
}

export default App;
