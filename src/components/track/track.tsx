import * as React from 'react'
import { TrackModel } from './track.d'

export const Track: React.FC<TrackModel> = ({
  image,
  title,
  artist,
  url
}) => {
  return (
    <div className="track__player">
      <div className="track__media">
        <img
          src={image.src}
          srcSet={image.srcset}
          alt={image.alt}
        />
      </div>
      <div className="track__info-audio">
        <span className="track__info">
          {`${title} - ${artist}`}
        </span>
        <audio 
          className="track__audio"
          controls
          src={url}
        ></audio>
      </div>
    </div>
  )
}
