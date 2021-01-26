import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VariantSelectorBox = styled.div`
  grid-area: 4 / 1 / 4 / 1;
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
