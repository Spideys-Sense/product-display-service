import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PriceBox = styled.div`
  margin: 10px;
  padding: 2px;
  border: 2px gray groove;
`;

const AutoShippingClickbait = styled.div`
  border-top: 1px solid gray;
  border-bottom 1px solid gray;
`;

export default function PriceView() {
  return (
    <PriceBox>
      <p>List Price: $$$</p>
      <p>Price: $$$</p>
      <p>You Save: $$$</p>
      <AutoShippingClickbait>
        Autoship and save: $$$
      </AutoShippingClickbait>
    </PriceBox>
  );
}
