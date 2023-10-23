// ShareToInstagram.tsx

import React from 'react';

interface Props {
  mediaUrl: string;  // URL to the image or video you want to share
}

const ShareToInstagram: React.FC<Props> = ({ mediaUrl }) => {

  const handleShareClick = () => {
    // Check if user is on a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const encodedMediaUrl = encodeURIComponent(mediaUrl);
      const instagramUrl = `instagram-stories://share?media=${encodedMediaUrl}`;
      window.location.href = instagramUrl;
    } else {
      alert("This feature is supported on mobile devices only.");
    }
  };

  return (
    <button onClick={handleShareClick}>
      Share to Instagram Stories
    </button>
  );
}

export default ShareToInstagram;
