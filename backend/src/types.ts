interface Basic {
  albumId: number;
  id: number;
  title: string;
}
interface Image extends Basic {
  path: string;
}

interface Photo extends Basic {
  url: string;
  thumbnailUrl: string;
}

interface imagesUpdt {
  id: number;
  title: string;
  url: string;
}
type Response = imagesUpdt[];
type RawResponse = Image[] | Photo[];

export { Image, Photo, Response, imagesUpdt, RawResponse };
