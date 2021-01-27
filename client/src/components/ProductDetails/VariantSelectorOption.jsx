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
  ${(props) => ((props.active)
    ? `background-color: #FAF0DF;
    border-color: #F0961B;`
    : '')};
  &:hover {
    border: 1px solid #F0961B;
    border-bottom: 2px solid #F0961B;
  }
`;

class VariantSelectorOption extends React.Component {
  constructor(props) {
    super(props);
    this.updateToThisVariant = this.updateToThisVariant.bind(this);
  }

  updateToThisVariant() {
    if (!this.isCurrentItem) {
      const { id, updateCurrentItem } = this.props;
      updateCurrentItem(id);
    }
  }

  render() {
    const { name, mainId, id } = this.props;
    this.isCurrentItem = (mainId === id);
    return (
      <Choice onClick={this.updateToThisVariant} active={this.isCurrentItem}>
        {name}
      </Choice>
    );
  }
}

VariantSelectorOption.propTypes = {
  id: PropTypes.number.isRequired,
  mainId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  updateCurrentItem: PropTypes.func.isRequired,
};

export default VariantSelectorOption;
