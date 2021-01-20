import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h4`
  margin: 10px;
  padding: 2px;
  border: 2px gray groove;
`;

export default function ProductDetails(props) {
  const { name } = props;
  return (
    <Header>
      {name}
    </Header>
  );
}
