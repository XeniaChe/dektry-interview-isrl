interface Image {
  albumId: number;
  id: number;
  title: string;
  path: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Response {
  images: Image[];
  photos: Photo[];
}
export { Image, Photo, Response };
