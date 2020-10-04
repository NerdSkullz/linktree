import { ImageLinkModel } from '../image-link/image-link.d'
import { LocationModel } from '../location/location.d'

export interface ShowModel {
  title: string
  logo: ImageLinkModel
  locations: LocationModel[]
}