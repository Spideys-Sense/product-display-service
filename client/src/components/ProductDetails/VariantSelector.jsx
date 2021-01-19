import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VariantSelectorBox = styled.div`
  margin: 10px;
  padding: 2px;
  border: 1px green solid;
`;

export default class VariantSelector extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <VariantSelectorBox>
        Variant Selector
      </VariantSelectorBox>
    );
  }
}
