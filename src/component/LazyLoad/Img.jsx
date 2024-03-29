import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Img({ src, className, alt }) {
  return (
    <LazyLoadImage className={className} alt={alt} effect="blur" src={src} />
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
