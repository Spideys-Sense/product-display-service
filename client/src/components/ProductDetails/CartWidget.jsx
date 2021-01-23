import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BuyBox = styled.div`
  position: relative;
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
  font-family: Roboto,serif;
  font-size: 10px;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 20px;
`;
CartWidgetForm.displayName = 'CartWidgetForm';

const QuantityDropDown = styled.select`
position: absolute;
width: 100%;
height: 100%;
-webkit-font-smoothing: antialiased;
font-weight: 400;
text-align: left;
line-height: 1.2em;
border: 1px solid #ccc;
outline: none;
background-color: #fff;
background-repeat: no-repeat;
background-position: right 50%;
transition: border-color .2s ease-out,box-shadow .2s ease-out,padding .2s ease-out;
appearance: none;
font-family: inherit;
box-sizing: border-box;
font-size: 16px;
border-radius: .4rem;
padding: 2rem 3rem .7rem 1rem;
`;
QuantityDropDown.displayName = 'QuantityDropDown';

const CartButton = styled.input`
text-align: center;
position: relative;
display: inline-block;
vertical-align: middle;
width: 100%;
cursor: pointer;
font-family: "Roboto", "Franklin Gothic Medium", Tahoma, sans-serif;
font-size: 1.4rem;
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

const FavoriteButton = styled.button`
  grid-row: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
          <QuantityDropDown value={quantity} onChange={this.handleSelect}>
            {Array(12)
              .fill(0)
              .map((e, i) => <option value={i + 1} key={`BUY-QUANT-${i.toString()}`}>{i + 1}</option>)}
          </QuantityDropDown>
          <CartButton type="submit" value="Add to Cart" />
        </CartWidgetForm>
        <FavoriteButton label="favoriteButton" type="button">
          Add to favorites!
        </FavoriteButton>
      </BuyBox>
    );
  }
}
