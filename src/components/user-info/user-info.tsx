import * as React from 'react'
import { UserInfoModel } from './user-info.d'
import { Image } from '../image/image'

export const UserInfo: React.FC<UserInfoModel> = ({
  image,
  title
}) => {
  return (
    <div className="user-info__wrapper">
      <div className="user-info__media">
        <Image
          src={image.src}
          alt={image.alt}
          srcset={image.srcset}
        />
      </div>
      <h1 className="user-info__title">
        @{title}
      </h1>
    </div>
  )
}
