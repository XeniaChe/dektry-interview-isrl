import { Image, GalleryProps } from '../types';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        margin: '50px',
      }}
    >
      {images.map((image: Image, index: number) => (
        <div key={image.id} style={{ flex: 1 }}>
          <img src={image.url} alt='' style={{ width: '100%' }} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
