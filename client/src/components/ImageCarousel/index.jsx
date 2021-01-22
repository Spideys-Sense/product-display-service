import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BigPicture from './BigPicture';
import ImageList from './ImageList';

const CarouselContainer = styled.div`
  width: 100%;
  grid-area: 2 / 1 / 2 / 1;
  margin: 10px;
  border: 1px cyan dashed;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 5fr;
`;


export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;
    const bigImage = images[activeIndex];

    return (
      <CarouselContainer>
        <ImageList urls={images} />
        <BigPicture url={bigImage} />
      </CarouselContainer>
    );
  }
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
