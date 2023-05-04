import { Image, GalleryProps } from '../types';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        margin: '50px',
      }}
    >
      {images.map((image: Image) => (
        <div key={image.id} style={{ flex: 1 }}>
          <img src={image.url} alt={image.title} style={{ maxWidth: '100%' }} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
