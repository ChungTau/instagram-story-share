// ShareToInstagram.tsx

import React, { useEffect, useState } from 'react';
interface Props {
  mediaUrl: string;  // URL to the image or video you want to share
}

const ShareToInstagramStory: React.FC = () => {
  // ShareToInstagram.tsx

  const [isSdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (window.FB) {
      setSdkLoaded(true);
    }
  }, []);

const handleShare = () => {
  if (isSdkLoaded) {

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
