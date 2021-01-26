import React from 'react';
import styled from 'styled-components';

import img from './images/biteyLogo.png';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const StyledWrapper = styled.div`
// @media (max-width: ${device.laptopL}) {
  background-color: #438ed2;
  height: 120px;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  grid-template-rows: 60% 40%;
// }
`;

const StyledTop = styled.div`
  grid-row-start: 1;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
`;

const StyledImg = styled.img`
  height: 75px;
  margin-left: 130px;
  :hover {
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
`;

const StyledInput = styled.input`
  display: inline;
  padding-left: 6px;
  width: 100%;
  height: 33px;
  transform: translateY(50%);
  border-radius: 3px;
  border: none;
`;

const StyledButton = styled.button`
  top: -12px;
  right: -5px;
  display: inline;
  width: 33px;
  background-color: transparent;
  border: none;
  position: relative;
  float: right;
`;

const StyledSvg = styled.svg`
  fill: #438ed2;
`;

const AccountInfo = styled.span`
  color: white;
  padding: 22px;
`;

const StyledDownArrow = styled.svg`
  padding-left: 8px;
  padding-bottom: 2px;
  width: 10px;
  fill: none;
  stroke:#f8d81c;
  stroke-width: 2;
// fill='yellow' fill-rule='evenodd' stroke='%23f8d81c' stroke-width='2'
`;

const Help = styled.span`
  padding: 10px;
  border-right: 1px solid white;
  :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
  /* ::after {
    margin-left: 10px;
    display: inline;
    height: 36px;
    border-right: 1px solid hsla(0,0%,100%,.2);
    content: "";
  } */
`;

const Account = styled.span`
  padding: 10px;
  display: inline-block;
  :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
  `;

const NameAccount = styled(Account)`
  // display: block;
  padding: 0;
  font-size: 12px;
  color: lightblue;
  :hover {
    background-color: transparent;
  }
`;

const Cart = styled.span`
  position: relative;
  border-left: 1px solid white;
  padding: 15px 15px 15px 0;
  margin-left: 15px;
  :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;

const StyledCartSvg = styled.svg`
  fill: white;
  padding: 0 15px;
  height: 20px;
`;

const StyledCartAmount = styled.span`
  background-color: #f8d81c;
  border-radius: 50%;
  padding: 0 5px;
  color: black;
  font-size: 16px;
  border: 0.5px solid #438ed2;
  position: absolute;
  top: 2px;
  left: 24px;
`;

const StyledBottom = styled.div`
  margin-left: 75px;
  grid-row-start: 2;
  transform: translateY(20%);
  display: flex;
  justify-content: space-around;
  height: 40px;
`;

const Shop = styled.span`
  text-align: center;
  color: white;
  font-size: 19px;
    :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;
const Pharm = styled.span`
  color: white;
    :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;
const Brands = styled.span`
  color: white;
    :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;
const Deals = styled.span`
  color: white;
    :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;
const GiftCards = styled.span`
  color: white;
    :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;
const FreeShipping = styled.span`
  color: #f8d81c;
    :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
  }
`;

const VSign = styled.span`
`;

const Header = () => (
  <StyledWrapper>
    <StyledTop>
      <StyledImg src={img} alt="logo" />
      <StyledForm>
        <StyledInput type="text" placeholder="Find the best for your pet..." />
        <StyledButton>
          <StyledSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.76 13.2l6.9 6.9A1.27 1.27 0 1 1 20 21.66l-6.9-6.9a7.03 7.03 0 1 1 1.66-1.66zm-5.73.62a4.69 4.69 0 1 0 0-9.38 4.69 4.69 0 0 0 0 9.38z" />
          </StyledSvg>
        </StyledButton>
      </StyledForm>
      <AccountInfo>
        <Help>
          24/7 Help
          <StyledDownArrow viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 4.98L1.63 1.1a.37.37 0 0 0-.52 0 .38.38 0 0 0 0 .53l4.12 4.12c.08.08.17.11.27.11s.2-.03.27-.1l4.12-4.13a.38.38 0 0 0 0-.53.37.37 0 0 0-.52 0L5.5 4.98z" />
          </StyledDownArrow>
        </Help>
        <Account>
          <NameAccount>Hi, User!</NameAccount>
          <br />
          your account
          <StyledDownArrow viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 4.98L1.63 1.1a.37.37 0 0 0-.52 0 .38.38 0 0 0 0 .53l4.12 4.12c.08.08.17.11.27.11s.2-.03.27-.1l4.12-4.13a.38.38 0 0 0 0-.53.37.37 0 0 0-.52 0L5.5 4.98z" />
          </StyledDownArrow>
        </Account>
        <Cart>
          <StyledCartSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" class="sfw-header-nav-cart__icon">
            <path d="M21.93 3.063H5.917l-.24-.843C4.958-.37 1.458-.818.224 1.537c-.557.986.908 1.83 1.466.845.59-1.04 2.25-.84 2.465.303l3.62 12.77a2.278 2.278 0 0 0-1.82-.982c-1.21 0-2.29.99-2.29 2.21s.98 2.21 2.29 2.21a2.2 2.2 0 0 0 2.233-2.704h8.402a2.2 2.2 0 0 0 2.23 2.716 2.2 2.2 0 0 0 2.29-2.21c0-1.208-.96-2.287-2.253-2.21l-.03-.002H9.255L8.68 12.8l12.382-1.826.867-7.91" />
          </StyledCartSvg>
          <StyledCartAmount>0</StyledCartAmount>
          cart
          <StyledDownArrow viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 4.98L1.63 1.1a.37.37 0 0 0-.52 0 .38.38 0 0 0 0 .53l4.12 4.12c.08.08.17.11.27.11s.2-.03.27-.1l4.12-4.13a.38.38 0 0 0 0-.53.37.37 0 0 0-.52 0L5.5 4.98z" />
          </StyledDownArrow>
        </Cart>
      </AccountInfo>
    </StyledTop>
    <StyledBottom>
      <Shop>
        shop
        <StyledDownArrow viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 4.98L1.63 1.1a.37.37 0 0 0-.52 0 .38.38 0 0 0 0 .53l4.12 4.12c.08.08.17.11.27.11s.2-.03.27-.1l4.12-4.13a.38.38 0 0 0 0-.53.37.37 0 0 0-.52 0L5.5 4.98z" />
        </StyledDownArrow>
      </Shop>
      <Pharm>
        pharmacy
        <StyledDownArrow viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 4.98L1.63 1.1a.37.37 0 0 0-.52 0 .38.38 0 0 0 0 .53l4.12 4.12c.08.08.17.11.27.11s.2-.03.27-.1l4.12-4.13a.38.38 0 0 0 0-.53.37.37 0 0 0-.52 0L5.5 4.98z" />
        </StyledDownArrow>
      </Pharm>
      <Brands>
        brands
      </Brands>
      <Deals>
        today's deals
      </Deals>
      <GiftCards>
        gift cards
      </GiftCards>
      <FreeShipping>
        FREE 1-3 DAY SHIPPING OVER $49!
      </FreeShipping>
    </StyledBottom>
  </StyledWrapper>

);

export default Header;
