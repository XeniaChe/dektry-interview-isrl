import { Image, GalleryProps } from '../types';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div>
      <div>
        {images.map((image: Image, index: number) => (
          <div>
            <img key={index} src={image.url} alt='' />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
