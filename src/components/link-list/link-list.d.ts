import { UserInfoModel } from '../user-info/user-info.d'
import { LinkModel } from '../link/link.d'

export interface LinkListModel {
  userInfo: UserInfoModel
  list: LinkModel[]
}