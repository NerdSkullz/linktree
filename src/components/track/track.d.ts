import { ImageModel } from '../image/image.d';

export interface TrackModel {
  image: ImageModel
  title: string
  artist: string
  url: string
}