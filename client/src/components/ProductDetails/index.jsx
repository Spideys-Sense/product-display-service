import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProductHeader from './ProductHeader';
import PriceView from './PriceView';
import VariantSelector from './VariantSelector';
import CartWidget from './CartWidget';
import InStock from './InStock';

const DetailsContainer = styled.div`
  grid-area: 2 / 2 / 2 / 2;
  margin: 10px;
  padding: 2px;
  border: 1px red dashed;
`;

export default function ProductDetails() {
  return (
    <DetailsContainer>
      Product Details
      <ProductHeader />
      <PriceView />
      <VariantSelector />
      <InStock />
      <CartWidget />
    </DetailsContainer>
  );
}
