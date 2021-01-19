import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BigPictureFrame = styled.h5`
  grid-area: 1 / 2 / 1 / 2;
  margin: 10px;
  bottom: 1px;
  border: 1px green dashed;
`;

export default function BigPicture() {
  return (
    <BigPictureFrame>
      Big pic here
    </BigPictureFrame>
  );
}
