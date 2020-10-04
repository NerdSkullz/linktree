import { LinkModel } from '../link/link.d'

export interface LocationModel {
  city: string
  date: string
  link?: LinkModel
  venue: string
}