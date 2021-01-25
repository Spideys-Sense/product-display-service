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
  display: inline;
  width: 35px;
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

const Help = styled.span`
  border-right: 1px solid white;
  padding: 0 20px;
  :hover {
    background-color: rgba(0,0,0,.2);
  }
`;

const Account = styled.span`
  border-right: 1px solid white;
  padding: 0 20px;
  :hover {
    background-color: rgba(0,0,0,.2);
  }
  `;

const NameAccount = styled(Account)`
  // display: block;
  font-size: 12px;
  color: lightblue;
`;

const Cart = styled.span`
  padding: 0 20px;
  :hover {
    background-color: rgba(0,0,0,.2);
  }
`;

const StyledCartSvg = styled.svg`
  fill: white;
  padding: 0 15px;
  height: 20px;
`;

const StyledBottom = styled.div`
  margin-left: 75px;
  grid-row-start: 2;
  transform: translateY(20%);
  display: flex;
  justify-content: space-around;
`;

const Shop = styled.span`
  color: white;
  font-size: 19px;
    :hover {
    background-color: rgba(0,0,0,.2);
  }
`;
const Pharm = styled.span`
  color: white;
    :hover {
    background-color: rgba(0,0,0,.2);
  }
`;
const Brands = styled.span`
  color: white;
    :hover {
    background-color: rgba(0,0,0,.2);
  }
`;
const Deals = styled.span`
  color: white;
    :hover {
    background-color: rgba(0,0,0,.2);
  }
`;
const GiftCards = styled.span`
  color: white;
    :hover {
    background-color: rgba(0,0,0,.2);
  }
`;
const FreeShipping = styled.span`
  color: #f8d81c;
    :hover {
    background-color: rgba(0,0,0,.2);
  }
`;

const Header = () => (
  <StyledWrapper>
    <StyledTop>
      <StyledImg src={img} alt="logo" />
      <StyledForm>
        <StyledInput type="text" placeholder="Find the best for your pet..." />
        <StyledButton>
          <StyledSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.76 13.2l6.9 6.9A1.27 1.27 0 1 1 20 21.66l-6.9-6.9a7.03 7.03 0 1 1 1.66-1.66zm-5.73.62a4.69 4.69 0 1 0 0-9.38 4.69 4.69 0 0 0 0 9.38z"></path>
          </StyledSvg>
        </StyledButton>
      </StyledForm>
      <AccountInfo>
        <Help>
          24/7 Help
        </Help>
        <Account>
          <NameAccount>Hi, User!</NameAccount>
          your account
        </Account>
        <Cart>
          <StyledCartSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" class="sfw-header-nav-cart__icon">
            <path d="M21.93 3.063H5.917l-.24-.843C4.958-.37 1.458-.818.224 1.537c-.557.986.908 1.83 1.466.845.59-1.04 2.25-.84 2.465.303l3.62 12.77a2.278 2.278 0 0 0-1.82-.982c-1.21 0-2.29.99-2.29 2.21s.98 2.21 2.29 2.21a2.2 2.2 0 0 0 2.233-2.704h8.402a2.2 2.2 0 0 0 2.23 2.716 2.2 2.2 0 0 0 2.29-2.21c0-1.208-.96-2.287-2.253-2.21l-.03-.002H9.255L8.68 12.8l12.382-1.826.867-7.91"></path>
          </StyledCartSvg>
          cart
        </Cart>
      </AccountInfo>
    </StyledTop>
    <StyledBottom>
      <Shop>
        shop
      </Shop>
      <Pharm>
        pharmacy
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
