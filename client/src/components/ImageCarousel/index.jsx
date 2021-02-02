import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BigPicture from './BigPicture';
import ImageList from './ImageList';

const CarouselContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  grid-area: 2 / 1 / 2 / 1;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 5fr;
`;

export default function ImageCarousel(props) {
  const {
    images, updateHoverData, updateModalDimensions, changeBigPicture, activeImageIndex, maxPages
  } = props;
  // const maxPages = Math.ceil(images.length / 5);
  const bigImage = images[activeImageIndex];

  return (
    <CarouselContainer>
      <ImageList
        urls={images}
        changeBigPicture={changeBigPicture}
        maxPages={maxPages}
        activeImageIndex={activeImageIndex}
      />
      <BigPicture
        url={bigImage}
        updateHoverData={updateHoverData}
        updateModalDimensions={updateModalDimensions}
      />
    </CarouselContainer>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateHoverData: PropTypes.func.isRequired,
  updateModalDimensions: PropTypes.func.isRequired,
  changeBigPicture: PropTypes.func.isRequired,
  activeImageIndex: PropTypes.number.isRequired,
};
