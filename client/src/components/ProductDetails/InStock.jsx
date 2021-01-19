import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StockWrapper = styled.div`
  width: fit-content;
  border: 1px #f0f0f0 solid;
  margin: 10px;
  padding: 8px;
  background-color: #fcfcfc;
  font-weight: bold;
  font-size: 18px;
  color: #286328;
`;

export default function InStock() {
  return (
    <StockWrapper>
      In Stock
    </StockWrapper>
  );
}
