import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Image } from './types';
import Gallery from './components/Gallery';
import Carousel from './components/Carousel';

function App() {
  const [type, setType] = useState<string>('gallery');
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const getAll = async () => {
      const { data } = await axios.get('http://localhost:3000/images');

      setImages(data);
    };

    getAll();
  }, []);

  const handleClick = (): void => {
    type === 'gallery' ? setType('carousel') : setType('gallery');
  };

  return (
    <div className='App'>
      <div className='Container'>
        {type === 'gallery' ? (
          <>
            <h4>Gallery view</h4>
            <Gallery images={images} />
          </>
        ) : (
          <>
            <h4>Carousel view</h4>
            <Carousel images={images} />
          </>
        )}
        <button onClick={handleClick}>
          {type === 'gallery' ? 'Go to CAROUSEL view' : 'Go to GALLERY view'}
        </button>
      </div>
    </div>
  );
}

export default App;
