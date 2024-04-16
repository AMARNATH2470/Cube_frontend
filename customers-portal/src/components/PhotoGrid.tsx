import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    const photoUrls = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/200?random=${Math.random()}`);
    setPhotos(photoUrls);
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Dynamic content ${index + 1}`} style={{ width: '100%' }} />
      ))}
    </div>
  );
};

export default PhotoGrid;
