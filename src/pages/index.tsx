import * as React from 'react'
import "../scss/main.scss";

// MODULES
import { LinkList } from '../components/link-list/link-list'
import { ShowList } from '../components/show-list/show-list'
import { SongList } from '../components/song-list/song-list'

// DATA
const UserInfoData = require('../data/user-info.json')
const LinkListData = require('../data/link-list.json')
const ShowListData = require('../data/show-list.json')
const SongListData = require('../data/song-list.json')

const IndexPage: React.FC = () => {
  return (
    <div className="l-wrapper">
      <div className="l-container">
        <h1 className="t-heading-1 t-center">
          Linktree Code Challenge
        </h1>
      </div>

      <div className="l-container">
        <p className="t-center">
          Simple link example
        </p>

        <LinkList
          userInfo={UserInfoData.profile}
          list={LinkListData.list}
        />
      </div>

      <div className="l-container">
        <p className="t-center">
          Show link example
        </p>

        <ShowList
          userInfo={UserInfoData.profile}
          list={ShowListData.list}
        />
      </div>

      <div className="l-container">
        <p className="t-center">
          Song link example
        </p>

        <SongList
          userInfo={UserInfoData.profile}
          list={SongListData.list}
        />
      </div>

    </div>
  )
}

export default IndexPage
