interface Image {
  id: number;
  title: string;
  url: string;
}

interface GalleryProps {
  images: Image[];
}
export type { Image, GalleryProps };
