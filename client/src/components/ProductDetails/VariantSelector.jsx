import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import VariantSelectorOption from './VariantSelectorOption';

const VariantSelectorBox = styled.div`
  grid-area: 4 / 1 / 4 / 1;
  display: flex;
  flex-wrap: wrap;
  flex-flow: space-evenly;
`;

export default class VariantSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      variantData: [],
    };
    this.getVariantNames = this.getVariantNames.bind(this);
    // setTimeout(this.getVariantNames, 200);
    this.getVariantNames();
  }

  getVariantNames() {
    const { variants } = this.props;
    const variantNameRequests = [];

    for (let i = 0; i < variants.length; i += 1) {
      variantNameRequests.push(new Promise((resolve) => {
        axios.get(`/api/${variants[i]}/summary`)
          .then((response) => response.data.variantName)
          .then((name) => {
            resolve({ id: variants[i], name });
          })
          .catch(() => {
            setTimeout(this.getVariantNames, 300); // Didn't go through? Try again
          });
      }));
    }
    Promise.all(variantNameRequests)
      .then((results) => {
        const { variantData } = this.state;
        const { mainId, variantName } = this.props;
        const mainItemData = { id: mainId, name: variantName };
        variantData.push(mainItemData);
        for (let i = 0; i < results.length; i += 1) {
          variantData.push(results[i]);
        }
        this.setState({ variantData, gotData: true });
      });
  }

  render() {
    const { gotData, variantData } = this.state;
    const { updateCurrentItem, mainId } = this.props;
    if (!gotData) {
      return null;
    }
    const VariantsList = variantData.map((vData) => {
      const { name, id } = vData;
      return (
        <VariantSelectorOption
          name={name}
          id={id}
          mainId={mainId}
          updateCurrentItem={updateCurrentItem}
          key={name + id}
        />
      );
    });

    return (
      <VariantSelectorBox>
        {VariantsList}
      </VariantSelectorBox>
    );
  }
}

VariantSelector.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.number).isRequired,
  variantName: PropTypes.string.isRequired,
  mainId: PropTypes.number.isRequired,
  updateCurrentItem: PropTypes.func.isRequired,
};
