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

interface imagesUpdt {
  id: number;
  title: string;
  url: string;
}
type Response = imagesUpdt[];

export { Image, Photo, Response, imagesUpdt };
