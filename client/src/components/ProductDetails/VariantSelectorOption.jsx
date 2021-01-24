import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Choice = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px;
  margin: 5px;
  font-size: 16px;
  border: 1px solid #D5D5D5;
  border-bottom: 2px solid #D5D5D5;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid #F0961B;
    border-bottom: 2px solid #F0961B;
  }
`;

export default function VariantSelectorOption(props) {
  const { name, id } = props;
  return (
    <Choice>
      {name}
    </Choice>
  );
}