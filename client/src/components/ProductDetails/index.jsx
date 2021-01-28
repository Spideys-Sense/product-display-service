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
    id,
    name,
    variantName,
    price,
    discount,
    stock,
    variants,
    modalHoverData,
    updateCurrentItem,
    zoomModalUrl,
    modalDimensions,
    submitToCart
  } = props;
  return (
    <DetailsContainer>
      <ZoomModal
        hoverData={modalHoverData}
        zoomModalUrl={zoomModalUrl}
        modalDimensions={modalDimensions}
      />
      <ProductHeader name={name} />
      <PriceView price={price} discount={discount} />
      <VariantSelector
        mainId={id}
        variantName={variantName}
        variants={variants}
        updateCurrentItem={updateCurrentItem}
      />
      <InStock stock={stock} />
      <CartWidget id={id} submitToCart={submitToCart} />
    </DetailsContainer>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  variantName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  variants: PropTypes.arrayOf(PropTypes.number).isRequired,
  modalHoverData: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
  updateCurrentItem: PropTypes.func.isRequired,
  zoomModalUrl: PropTypes.string.isRequired,
  modalDimensions: PropTypes.shape({
    width: 0,
    height: 0,
  }).isRequired,
};
