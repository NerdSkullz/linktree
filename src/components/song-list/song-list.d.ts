import { UserInfoModel } from '../user-info.d'
import { SongModel } from '../song/song.d'

export interface SongListModel {
  userInfo: UserInfoModel
  list: SongModel[]
}