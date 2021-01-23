import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PriceBox = styled.div`
  grid-area: 2 / 1 / 2 / 1;
  padding: 2px;
  border: 2px gray groove;
`;

const AutoShippingClickbait = styled.div`
  border-top: 1px solid gray;
  border-bottom 1px solid gray;
`;

const formatPrice = function (cents) {
  // Takes in an integer value of the price in cents
  const stringCents = `$${cents.toString()}`.split('');
  const decimalIndex = stringCents.length - 2;
  stringCents.splice(decimalIndex, 0, '.');
  // Returns a string representing the price in '$dollars.cents'
  return stringCents.join('');
};

export default function PriceView(props) {
  let { price, discount } = props;
  price = price || 2499;
  discount = discount || 100;
  const realPrice = price - discount;

  return (
    <PriceBox>
      <p>
        {' '}
        {`List Price: ${formatPrice(price)}`}
        {' '}
      </p>
      <p>
        {`Price: ${formatPrice(realPrice)}`}
      </p>
      <p>
        {`You Save: ${formatPrice(discount)}`}
      </p>
      <AutoShippingClickbait>
        {`AutoShip & Save! ${formatPrice(realPrice - Math.round(realPrice * 0.05))}`}
      </AutoShippingClickbait>
    </PriceBox>
  );
}
