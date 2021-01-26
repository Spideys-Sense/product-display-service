import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BuyBox = styled.div`
  grid-area: 2 / 2 / 2 / 2;
  position: relative;
  height: 210px;
  max-width: 400px;
  min-width: 200px;
  width: 20vw;
  border: 1px #EEE solid;
  border-radius: 5px;
  background-color: #f9f9f9;
  display:grid;
  grid-template-rows: 70% 30%;
  grid-template-columns: 100%;
`;
BuyBox.displayName = 'BuyBox';

const CartWidgetForm = styled.form`
  position: relative;
  font-size: 10px;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-rows: 48px 48px;
  grid-template-columns: 215px;
  row-gap: 15px;
`;
CartWidgetForm.displayName = 'CartWidgetForm';

const QuantityDropDown = styled.select`
padding-left: 5px;
grid-area: 1 1;
font-weight: 400;
text-align: left;
border: 1px solid #ccc;
background-color: #fff;
transition: border-color .2s ease-out,box-shadow .2s ease-out,padding .2s ease-out;
font-size: 16px;
border-radius: 4px;
outline:none;
&:hover {
  border-color: #f5a623;
}
&:focus {
  box-shadow: 0 0 0 1px #f5a623;
}
`;
QuantityDropDown.displayName = 'QuantityDropDown';

const CartButton = styled.input`
grid-row: 2;
text-align: center;
position: relative;
display: inline-block;
vertical-align: middle;
width: 100%;
cursor: pointer;
font-family: "Roboto", "Franklin Gothic Medium", Tahoma, sans-serif;
font-size: 18px;
font-weight: bold;
text-decoration: none;
white-space: nowrap;
outline: none;
border-radius: 4px;
transition: all, 0.4s, ease-out;
box-sizing: border-box;
touch-action: manipulation;
user-select: none;
-webkit-font-smoothing: antialiased;
background-color: #ef6c00;
color: #ffffff;
border: 0.1rem solid #ef6c00;
font-weight: 700;
  &:hover {
    background-color: #c15000;
  }
`;
CartButton.displayName = 'CartButton';

const FavoriteArea = styled.div`
  grid-row: 2;
  background-color: white;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heart = styled.p`
  all:unset;
  margin: 3px;
  font-weight: bold;
  color: #1159B0;
`;

const FavoriteButton = styled.p`
  color: #207DE9;
`;

FavoriteButton.displayName = 'FavoriteButton';

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
      <BuyBox>
        <CartWidgetForm onSubmit={this.handleSubmit}>
          <QuantityDropDown name="Quantity" onChange={this.handleSelect}>
            <option value="" disabled selected>Select Quantity</option>
            {Array(12)
              .fill(0)
              .map((e, i) => <option value={i + 1} key={`BUY-QUANT-${i.toString()}`}>{i + 1}</option>)}
          </QuantityDropDown>
          <CartButton type="submit" value="Add to Cart" />
        </CartWidgetForm>
        <FavoriteArea>
          <FavoriteButton label="favoriteButton" type="button">
            <Heart>
              ♡
            </Heart>
            Add to favorites!
          </FavoriteButton>
        </FavoriteArea>
      </BuyBox>
    );
  }
}
