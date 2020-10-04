import * as React from 'react'
import { SongListModel } from './song-list.d'
import { UserInfo } from '../user-info/user-info'
import { SongModel } from '../song/song.d'
import { Song } from '../song/song'

export const SongList: React.FC<SongListModel> = ({
  userInfo,
  list
}) => {
  return (
    <div className="linktree__wrapper">
      <UserInfo
        image={userInfo.image}
        title={userInfo.title}
      />

      <ul className="linktree__list">
        {list.map((item:SongModel, key) => (
          <li 
            key={key}
            className="linktree__item"
          >
            <Song
              {...item}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
