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

  console.log({ images });
  const handleClick = (): void => {
    type === 'gallery' ? setType('carousel') : setType('gallery');
  };

  return (
    <div className='App'>
      Hello
      <button onClick={handleClick}>{type}</button>
      {type === 'gallery' ? (
        <Gallery images={images} />
      ) : (
        <Carousel images={images} />
      )}
    </div>
  );
}

export default App;
