import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageBorderWrapper = styled.div`
  box-sizing: border-box;
  width: 90px;
  height: 60px;
  margin: 5px;
  bottom: 1px;
  border: ${(props) => ((props.activeImageIndex === props.i)
    ? '1px #F0961B solid;'
    : '1px #D5D5D5 solid;')}
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 54px;
  width: 54px;
  object-fit: cover;
  padding: auto;
`;

export default function ImageListEntry(props) {
  const {
    url, changeBigPicture, activeImageIndex, i,
  } = props;
  return (
    <ImageBorderWrapper activeImageIndex={activeImageIndex} i={i}>
      <Img src={url} onMouseOver={() => { changeBigPicture(i); }} />
    </ImageBorderWrapper>
  );
}

ImageListEntry.propTypes = {
  url: PropTypes.string.isRequired,
  changeBigPicture: PropTypes.func.isRequired,
  activeImageIndex: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
};
