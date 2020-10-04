import * as React from 'react'
import { LinkListModel } from './link-list.d'
import { UserInfo } from '../user-info/user-info'
import { LinkModel } from '../link/link'

export const LinkList: React.FC<LinkListModel> = ({
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
        {list.map((item:LinkModel, key) => (
          <li 
            key={key}
            className="linktree__item"
          >
            <a
              className="linktree__link"
              href={item.href}
              target={item.target}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
