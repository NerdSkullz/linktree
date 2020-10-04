import * as React from 'react'
import { ShowListModel } from './show-list.d'
import { UserInfo } from '../user-info/user-info'
import { ShowModel } from '../show/show.d'
import { Show } from '../show/show'

export const ShowList: React.FC<ShowListModel> = ({
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
        {list.map((item:ShowModel, key) => (
          <li 
            key={key}
            className="linktree__item"
          >
            <Show
              {...item}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
