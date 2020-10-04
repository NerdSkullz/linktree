import * as React from 'react'
import { LocationModel } from './location.d'

// The location component returns a div if the link is null. Please return the link as null if the show is sold out to avoid empty links.
export const Location: React.FC<LocationModel> = ({
  city,
  date,
  link,
  venue
}) => {
  if (link) {
    return (
      <a
        href={link.href}
        target={link.target}
        className="expandable__link"
      >
        {date}
        <span className="expandable__info">
          {`${city}, ${venue}`}
        </span>
      </a>
    )
  } else {
    return (
      <div
        className="expandable__sold-out"
      >
        {date}
        <span className="expandable__info">
          {`${city}, ${venue}`}
        </span>
      </div>
    )
  }
}
