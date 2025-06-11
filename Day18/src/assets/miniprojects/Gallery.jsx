import  { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=15');
      setImages(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load images.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="gallery">
      {images.map((img) => (
        <div key={img.id} className="image-card">
          <img src={img.download_url} alt={img.author} />
          <p>{img.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
