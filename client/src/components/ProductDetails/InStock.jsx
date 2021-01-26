import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StockWrapper = styled.div`
  grid-area: 3 / 1 / 3 / 1;
  width: fit-content;
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => ((props.stock >= 1) ? '#286328' : '#D2001D')}
`;

export default function InStock(props) {
  const { stock } = props;
  return (
    <StockWrapper stock={stock}>
      {(stock) ? 'In stock' : 'Out of stock'}
    </StockWrapper>
  );
}
