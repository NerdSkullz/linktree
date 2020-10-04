import * as React from 'react'
import { useState } from "react"
import { SongModel } from './song.d'
import { ImageLinkModel } from '../image-link/image-link.d'
import { Track } from '../track/track'

export const Song: React.FC<SongModel> = ({
  providers,
  track
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
        {track.title}
      </button>
      <div
        className={state.isOpen ? "expandable__wrapper expanded" : "expandable__wrapper hidden"}
        aria-hidden={!state.isOpen}
        aria-expanded={state.isOpen}
      >
        <Track
          {...track}
        />
        <ul className="expandable__list">
          {providers.map((item:ImageLinkModel, key) => (
            <li
              className="expandable__item"
              key={key}
            >
              <a
                href={item.link.href}
                target={item.link.target}
                className="expandable__link expandable__link--horizontal"
              >
                <img
                  src={item.image.src}
                  srcSet={item.image.srcset}
                  alt={item.image.alt}
                />
                {item.link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
