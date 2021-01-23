import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProductHeader from './ProductHeader';
import PriceView from './PriceView';
import VariantSelector from './VariantSelector';
import CartWidget from './CartWidget';
import InStock from './InStock';
import ZoomModal from './ZoomModal';

const DetailsContainer = styled.div`
  box-sizing: border-box;
  grid-area: 2 / 2;
  display: grid;
  grid-template: 28px 62fr 3fr 30fr / 400px 40fr;
  gap: 2% 2%;
`;

export default function ProductDetails(props) {
  const {
    id, name, price, discount, stock, variants, modalHoverData
  } = props;
  return (
    <DetailsContainer>
      <ZoomModal hoverData={modalHoverData} />
      <ProductHeader name={name} />
      <PriceView price={price} discount={discount} />
      <VariantSelector variants={variants} />
      <InStock stock={stock} />
      <CartWidget id={id} />
    </DetailsContainer>
  );
}
