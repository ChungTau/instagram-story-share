// ShareToInstagram.tsx

import React from 'react';

interface Props {
  mediaUrl: string;  // URL to the image or video you want to share
}

const ShareToInstagramStory: React.FC = () => {
  const handleShare = () => {
    if (window.FB) {
      window.FB.ui(
        {
          method: 'share_to_instagram_story',
          display: 'popup',
          hashtag: '#YourHashtag',
          attribution_app_id: '762957345592162',
          media: [
            {
              type: 'photo',
              url: 'https://img.edh.tw/201702/33276002612_3dcbd03285_b.jpg',
            },
          ],
        },
        function(response: any) {
          if (response && !response.error_message) {
            alert('Posted successfully.');
          } else {
            alert('Error while posting.');
          }
        }
      );
    } else {
      alert('Facebook SDK not initialized.');
    }
  };

  return (
    <button onClick={handleShare}>
      Share to Instagram Story
    </button>
  );
};

export default ShareToInstagramStory;
