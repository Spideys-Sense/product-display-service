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

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      images, updateHoverData, changeBigPicture, activeImageIndex,
    } = this.props;
    const bigImage = images[activeImageIndex];

    return (
      <CarouselContainer>
        <ImageList urls={images} changeBigPicture={changeBigPicture} />
        <BigPicture url={bigImage} updateHoverData={updateHoverData} />
      </CarouselContainer>
    );
  }
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateHoverData: PropTypes.func.isRequired,
};
