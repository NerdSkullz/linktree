import { ImageLinkModel } from '../image-link/image-link.d'
import { TrackModel } from '../track/track.d'

export interface SongModel {
  providers: ImageLinkModel[]
  track: TrackModel
}