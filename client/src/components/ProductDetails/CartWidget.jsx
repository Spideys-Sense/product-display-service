import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BorderWrapper = styled.div`
  max-width: 400px;
  min-width: 200px;
  width: 20vw;
  border: 1px #EAEAEA solid;
  border-radius: 3px;
  display:grid;
  grid-template-rows: 70% 30%;
  grid-template-columns: 100%;
`;

const CartWidgetForm = styled.form`
  margin: 22px;
  width: 85%;
  border: 1px green solid;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const QuantityDropDown = styled.select`
  display: box;
  height: 50px;
`;

const CartButton = styled.input`
`;

const FavoriteButton = styled.button`
  grid-row: 2;
`;

export default class CartWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    // const { submitToCart } = props;
    const submitToCart = ((x) => console.log(x)); // dummy func for now
    this.submitToCart = submitToCart;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { quantity } = this.state;
    this.submitToCart(quantity);
  }

  render() {
    const selections = [];
    for (let i = 1; i <= 12; i += 1) {
      const selection = (<option value={i} key={i}>{i}</option>);
      selections.push(selection);
    }
    const { quantity } = this.state;
    return (
      <BorderWrapper>
        <CartWidgetForm onSubmit={this.handleSubmit}>
          <QuantityDropDown value={quantity} onChange={this.handleSelect}>
            {Array(12)
              .fill(0)
              .map((e, i) => <option value={i + 1} key={`BUY-QUANT-${i.toString()}`}>{i + 1}</option>)}
          </QuantityDropDown>
          <CartButton type="submit" value="Submit" />
        </CartWidgetForm>
        <FavoriteButton label="favoriteButton" type="button" onClick={console.log('Added to favorites!')} >
          Add to favorites!
        </FavoriteButton>
      </BorderWrapper>
    );
  }
}
