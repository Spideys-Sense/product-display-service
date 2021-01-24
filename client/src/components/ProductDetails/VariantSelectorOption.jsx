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

class VariantSelectorOption extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.updateToThisVariant = this.updateToThisVariant.bind(this);
  }

  updateToThisVariant() {
    const { updateCurrentItem } = this.props;
    updateCurrentItem(this.id);
  }

  render() {
    const { name } = this.props;
    return (
      <Choice onClick={this.updateToThisVariant}>
        {name}
      </Choice>
    );
  }
}

export default VariantSelectorOption;