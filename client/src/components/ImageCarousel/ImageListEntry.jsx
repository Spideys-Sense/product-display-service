import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageBorderWrapper = styled.div`
  width: 90px;
  height: 60px;
  margin: 10px;
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
  const { url } = props;
  return (
    <ImageBorderWrapper>
      <Img src={url} />
    </ImageBorderWrapper>
  );
}

ImageListEntry.propTypes = {
  url: PropTypes.string.isRequired,
};
