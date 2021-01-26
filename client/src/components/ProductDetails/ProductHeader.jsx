import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h1`
  grid-area: 1 / 1 / 1 / 2;
  font-size: 24px;
  height: 28px;
  margin-block-end: 5px;
  margin-block-start: -6px;
`;

export default function ProductDetails(props) {
  const { name } = props;
  return (
    <Header>
      {name}
    </Header>
  );
}

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
};
