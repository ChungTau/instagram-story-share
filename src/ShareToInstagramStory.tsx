// ShareToInstagram.tsx

import React, { useEffect, useState } from 'react';
interface Props {
  mediaUrl: string;  // URL to the image or video you want to share
}

const ShareToInstagramStory: React.FC = () => {
  // ShareToInstagram.tsx

  useEffect(() => {
  // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
  window.fbAsyncInit = function () {
    // 初始化 Facebook SDK
    window.FB.init({
      appId: '762957345592162',
      cookie: true,
      xfbml: true,
      version:'v18.0',
    });

    console.log('[fbAsyncInit] after window.FB.init');
    window.FB.AppEvents.logPageView();
  };


}, []);

const handleShare = () => {
  if (window.FB) {
    window.FB.ui({
      method: 'share',
      href: 'https://opengraph.githubassets.com/d8c280b965a9debe78481a78417528438a6eee0d2457ccc81fd6b61ed32055e9/appchoose/react-native-share-instagram-story'
    }, function(response:any){
      // Handle the response
    });
  } else {
    console.error('FB SDK not loaded yet');
  }
}

  return (
    <button onClick={handleShare}>
      Share to Instagram Story
    </button>
  );
};

export default ShareToInstagramStory;
