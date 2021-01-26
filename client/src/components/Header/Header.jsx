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
  position: relative;
  display: inline-block;

  padding: 10px;
  border-right: 1px solid white;
  :hover {
    transition: background-color 0.17s ease-in-out;
    background-color: rgba(0,0,0,.2);
    cursor: pointer;
    display: inline;
  }
  /* ::after {
    margin-left: 10px;
    display: inline;
    height: 36px;
    border-right: 1px solid hsla(0,0%,100%,.2);
    content: "";
  } */
`;

//thing thgat u hover on to change display

//drop down content


const HelpDropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  transition: 1s ease-in 1s;
  ${Help}:hover & {
    display: block;
    right: 0;
    background-color: white;
    color: black;
    font-size: 14px;
    padding: 10px 0;
    line-height: 25px;
    text-align: center;
    .text {
      padding: 35px;
      overflow: hidden;
      white-space: nowrap;
    }
    .number {
      padding: 35px;
      font-size: 20px;
      color: orange;
    }
    .chatContact {
      border: 1px solid  #cccccc;
      background-color: #e6e6e6;
      display: grid;
      grid-template-columns: 50% 50%;
    }
    .chat {
      color: #438ed2;
      padding: 10px;
      position: relative;
      border-right: 1px solid  #cccccc;
      grid-template-start: 1;
      :hover {
        background-color: white;
      }
    }
    .chat svg {
      position: relative;
      top: 4px;
      fill: #438ed2;
      width: 20px;
    }
    .contact {
      color: #438ed2;
      padding: 10px;
      position: relative;
      grid-template-start: 1;
      :hover {
        background-color: white;
      }
    }
    .contact svg {
      position: relative;
      top: 1px;
      fill: #438ed2;
      width: 15px;
    }
    .bottom {
      color: #438ed2;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      white-space: nowrap;
    }
  }
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
          <HelpDropDownContent>
            <span className="text">Get help from our experts 24/7</span>
            <br />
            <span className="number">1-800-SPI-DEYS</span>
            <br />
            <div className="chatContact">
              <span className="chat">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.43 13.74c0 1.57.9 3 2.35 3.98h-.06c-1.4 0-2.71-.24-3.88-.66l-2.87 1.79.64-2.95C3 14.74 2 13.14 2 11.36 2 7.85 5.9 5 10.72 5c3.59 0 6.67 1.58 8 3.84a9.28 9.28 0 0 0-3.04-.5c-4 0-7.25 2.42-7.25 5.4zm13.57 0c0 1.32-.82 2.55-2.25 3.4l.3 1.86-2-1.14c-.72.2-1.49.3-2.27.3-3.43 0-6.22-1.98-6.22-4.42s2.79-4.43 6.22-4.43c3.43 0 6.22 2 6.22 4.43z"></path></svg>
                chat live
              </span>
              <span className="contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17" class="cw-icon__image"><path d="M23.05 4.09c0-.37-.26-.6-.66-.36L11.48 10.8.66 3.73A.42.42 0 0 0 0 4.1v11.64c0 .39.3.7.66.7h21.73c.36 0 .66-.31.66-.7V4.09zm-.66-2.12L11.48 9.03.66 1.97c-.34-.2-.66-.32-.66-.7V.7C0 .3.3 0 .66 0h21.73c.36 0 .66.32.66.7v.56c.02.38-.26.47-.66.71z"></path></svg>
                contact us
              </span>
            </div>
            <div className="bottom">
              <span>Track Order</span>
              <span>-</span>
              <span>FAQs</span>
              <span>-</span>
              <span>Shipping Info</span>
            </div>
          </HelpDropDownContent>
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
