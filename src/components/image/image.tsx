import * as React from 'react'
import { ImageModel } from './image.d'

// Image module to account for srcset attribute if present. Please leverage srcset for bigger asset that need to be optimize for different devices.
export const Image: React.FC<ImageModel> = ({
  alt,
  src,
  srcset
}) => {
  return (
    <img
      src={src}
      srcSet={srcset ?? ""}
      alt={alt ?? ""}
    />
  )
}
