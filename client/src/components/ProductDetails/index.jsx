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
`;

export default function ProductDetails(props) {
  const {
    id, name, price, discount, stock, variants,
  } = props;

  return (
    <DetailsContainer>
      Product Details
      <ProductHeader name={name} />
      <PriceView price={price} discount={discount} />
      <VariantSelector variants={variants} />
      <InStock stock={stock} />
      <CartWidget id={id} />
    </DetailsContainer>
  );
}
