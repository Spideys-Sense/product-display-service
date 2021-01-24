import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import VariantSelectorOption from './VariantSelectorOption';

const VariantSelectorBox = styled.div`
  grid-area: 4 / 1 / 4 / 1;
  display: flex;
  flex-flow: space-evenly;
`;

export default class VariantSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      variantData: [],
    };
    console.log(props.variants);
    this.getVariantNames = this.getVariantNames.bind(this);
    // setTimeout(this.getVariantNames, 200);
    this.getVariantNames();
  }

  getVariantNames() {
    const { variants } = this.props;
    const variantNameRequests = [];

    for (let i = 0; i < variants.length; i += 1) {
      variantNameRequests.push(new Promise((resolve, reject) => {
        axios.get(`/api/${variants[i]}/summary`)
          .then((response) => response.data.variantName)
          .then((name) => {
            resolve({ id: variants[i], name });
          })
          .catch((err) => {
            setTimeout(this.getVariantNames, 300); // Didn't go through? Try again
          });
      }));
    }
    console.log(variantNameRequests);
    Promise.all(variantNameRequests)
      .then((results) => {
        console.log('results:', results);
        const variantData = [];
        for (let i = 0; i < results.length; i += 1) {
          variantData.push(results[i]);
        }
        this.setState({ variantData, gotData: true });
      });
  }

  render() {
    const { gotData, variantData } = this.state;
    const { updateCurrentItem } = this.props;
    if (!gotData) {
      return null;
    }

    const VariantsList = variantData.map((vData) => {
      const { name, id } = vData;
      return (
        <VariantSelectorOption name={name} id={id} updateCurrentItem={updateCurrentItem}/>
      );
    });

    return (
      <VariantSelectorBox>
        {VariantsList}
      </VariantSelectorBox>
    );
  }
}
