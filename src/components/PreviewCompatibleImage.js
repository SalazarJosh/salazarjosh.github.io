import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image, className = '' } = imageInfo

  if (!!image && !!image.childImageSharp) {
    const imageData = getImage(image)
    return (
      <GatsbyImage className="blog-header-image" image={imageData} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    const imageData = getImage(childImageSharp)
    return <GatsbyImage image={imageData} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} className={className} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
