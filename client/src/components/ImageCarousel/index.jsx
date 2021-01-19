import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BigPicture from './BigPicture';
import ImageList from './ImageList';

const CarouselContainer = styled.div`
  grid-area: 2 / 1 / 2 / 1;
  margin: 10px;
  border: 1px cyan dashed;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 5fr;
`;

export default class ImageCarousel extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <CarouselContainer>
        Image Carousel
        <BigPicture />
        <ImageList />
      </CarouselContainer>
    );
  }
}
