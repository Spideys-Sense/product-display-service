import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Top-level container
const PriceBox = styled.div`
  max-height: 280px;
  grid-area: 2 / 1 / 2 / 1;
  padding: 2px;
  display: grid;
  grid-template-rows: 40px 40px 40px 80px;
`;

// Price Section template & section instances
const PriceSection = styled.div` // Template
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 10px;
  align-items: center;
`;

const ListPrice = styled(PriceSection)`
  min-height: 100%;
  grid-row: 1;
`;

const RealPrice = styled(PriceSection)`
  min-height: 100%;
  grid-row: 2;
`;

const YouSave = styled(PriceSection)`
  min-height: 100%;
  grid-row: 3;
`;

const AutoShip = styled(PriceSection)`
  min-height: 100%;
  grid-row: 4;
  border-bottom: 1px solid #F4F4F4;
  border-top: 1px solid #F4F4F4;
`;
//

// Price display templates & instances
const PriceTitle = styled.p` // Template
  margin: 0;
  color: #434343;
  grid-column: 1;
  font-size: 16px;
  font-weight: lighter;
  line-size: 14px;
`;

const AutoShipTitle = styled(PriceTitle)`
  text-align: right;
  margin-right: 3px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: bold;
  color: #163977;
  span {
    color: #EF6C00;
  }
`;

const PriceText = styled.p` // Template
  margin: 0;
  color: #A21508;
  grid-column: 2;
  font-size: 24px;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const AutoShipInfoText = styled.p`
  margin-top: 1px;
  font-size: 14px;
  color: black;
  font-weight: lighter;
`;

const SmallPriceText = styled(PriceText)`
  font-size: 16px;
  font-weight: lighter;
`;

const SmallStrikeThrough = styled(SmallPriceText)`
  color: #000;
  text-decoration: line-through;
  font-weight: normal;
`;
//

const formatPrice = function (cents) {
  return (cents / 100).toFixed(2);
};

export default function PriceView(props) {
  let { price, discount } = props;
  price = price || 2499;
  discount = discount || 100;
  const realPrice = price - discount;
  const autoShipPrice = realPrice - Math.round(realPrice * 0.05);

  return (
    <PriceBox>
      <ListPrice>
        <PriceTitle>List Price:</PriceTitle>
        <SmallStrikeThrough>
          $
          {formatPrice(price)}
        </SmallStrikeThrough>
      </ListPrice>
      <RealPrice>
        <PriceTitle>Price:</PriceTitle>
        <PriceText>
          $
          {formatPrice(realPrice)}
        </PriceText>
      </RealPrice>
      <YouSave>
        <PriceTitle>You Save:</PriceTitle>
        <SmallPriceText>
          $
          {formatPrice(discount)}
        </SmallPriceText>
      </YouSave>
      <AutoShip>
        <AutoShipTitle>
          AutoShip:
          <br />
          <span>&Save!</span>
        </AutoShipTitle>
        <PriceText>
          $
          {formatPrice(autoShipPrice)}
          <br />
          <AutoShipInfoText>
            Simply select Autoship at checkout
            {' '}
            <br />
            for easy regular deliveries.
          </AutoShipInfoText>
        </PriceText>
      </AutoShip>
    </PriceBox>
  );
}
