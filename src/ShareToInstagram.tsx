// ShareToInstagram.tsx

import React from 'react';

interface Props {
  mediaUrl: string;  // URL to the image or video you want to share
}

const ShareToInstagram: React.FC<Props> = ({ mediaUrl }) => {

  const handleShareClick = () => {
    if (window.FB) {
      window.FB.ui({
        method: 'share_to_instagram_stories',
        media_url: mediaUrl
      }, function(response: any) {
        // Handle the response or error here
        if (response && !response.error_message) {
          alert('Posted successfully');
        } else {
          alert('Error while posting.');
        }
      });
    }
  };

  return (
    <button onClick={handleShareClick}>
      Share to Instagram Stories
    </button>
  );
}

export default ShareToInstagram;
