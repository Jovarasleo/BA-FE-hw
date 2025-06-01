interface GiphyImage {
  url: string;
  width: string;
  height: string;
  size: string;
}

interface GiphyDataImages {
  original: GiphyImage;
  fixed_width_small: GiphyImage;
  fixed_width_downsampled: GiphyImage;
}

export interface GiphyData {
  id: string;
  title: string;
  import_datetime: string;
  images: GiphyDataImages;
}

export interface GiphyResponse {
  data: GiphyData[];
  meta: {
    status: number;
    msg: string;
  };
}
