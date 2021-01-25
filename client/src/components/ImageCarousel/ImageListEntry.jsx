import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageBorderWrapper = styled.div`
  box-sizing: border-box;
  width: 90px;
  height: 60px;
  margin: 5px;
  bottom: 1px;
  border: 1px #D5D5D5 solid;
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
  const { url, changeBigPicture, i } = props;
  return (
    <ImageBorderWrapper>
      <Img src={url} onMouseOver={() => { changeBigPicture(i); }} />
    </ImageBorderWrapper>
  );
}

ImageListEntry.propTypes = {
  url: PropTypes.string.isRequired,
  changeBigPicture: PropTypes.func.isRequired,
};
