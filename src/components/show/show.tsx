import * as React from 'react'
import { useState } from "react"
import { ShowModel } from './show.d'
import { LocationModel } from '../location/location.d'
import { Location } from '../location/location'

export const Show: React.FC<ShowModel> = ({
  title,
  logo,
  locations
}) => {
  const [state, stateSet] = useState({ isOpen: false })

  return (
    <>
      <button
        aria-expanded={state.isOpen}
        className="linktree__trigger"
        onClick={() => {
          stateSet({ isOpen: !state.isOpen })
        }}
      >
        {title}
      </button>
      <div
        className={state.isOpen ? "expandable__wrapper expanded" : "expandable__wrapper hidden"}
        aria-hidden={!state.isOpen}
        aria-expanded={state.isOpen}
      >
        <ul className="expandable__list">
          {locations.map((item:LocationModel, key) => (
            <li
              className="expandable__item"
              key={key}
            >
              <Location
                {...item}
              />
            </li>
          ))}
        </ul>
        <div className="linktree__footer">
          by &nbsp;
          <a
            href={logo.link.href}
            target={logo.link.target}
          >
            <img
              src={logo.image.src}
              alt={logo.image.alt}
              srcSet={logo.image.srcset}
            />
          </a>
        </div>
      </div>
    </>
  )
}
