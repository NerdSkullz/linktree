import { UserInfoModel } from '../user-info.d'
import { ShowModel } from '../show/show.d'

export interface ShowListModel {
  userInfo: UserInfoModel
  list: ShowModel[]
}