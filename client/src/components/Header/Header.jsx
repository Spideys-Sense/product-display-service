import React from 'react';
import styled from 'styled-components';

import img from './images/biteyLogo.png';

const StyledWrapper = styled.div`
  background-color: #438ed2;
  height: 100px;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledImg = styled.img`
  height: 75px;
  margin-left: 65px;
`;

const Header = () => (
  <StyledWrapper>
    <StyledImg src={img} alt="logo" />
  </StyledWrapper>
);

export default Header;
