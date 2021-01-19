import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CartWrapper = styled.div`
  margin: 10px;
  padding: 2px;
  border: 1px green solid;
`;

export default class CartWidget extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <CartWrapper>
        Cart Widget
      </CartWrapper>
    );
  }
}
