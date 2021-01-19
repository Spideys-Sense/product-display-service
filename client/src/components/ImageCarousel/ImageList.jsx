import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListContainer = styled.h5`
  grid-area: 1 / 1 / 1 / 1;
  margin: 10px;
  bottom: 1px;
  border: 1px green dashed;
`;

export default function ImageList() {
  return (
    <ListContainer>
      Little pics here
    </ListContainer>
  );
}
