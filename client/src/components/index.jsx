import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageCarousel from './ImageCarousel';
import ProductDetails from './ProductDetails';
import DepartmentList from './DepartmentList';

const AppContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: fit-content;
  width: 1200px;
  height: 450px;
  border: 1px solid black;
  display: grid;
  column-gap: 1%;
  grid-template-rows: 10% 90%;
  grid-template-columns: 39% 60%;
  overflow: hidden;
`;
AppContainer.displayName = 'AppContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      modalHoverData: {
        x: 0,
        y: 0,
        active: true,
      },
    };
    this.updateHoverData = this.updateHoverData.bind(this);
  }

  componentDidMount() {
    // Get data from server
    const { id } = this.props;
    let localItem;
    axios.get(`/api/${id}/summary`)
      .then((response) => response.data)
      .then((servedItem) => {
        localItem = servedItem;
        return axios.get(`/api/${id}/images`);
      })
      .then((response) => response.data.imageUrls)
      .then((servedImages) => {
        localItem.images = servedImages;
        this.setState(localItem);
      });
  }

  updateHoverData(x, y, active) {
    let state = this.state;
    const newHoverData = {
      x,
      y,
      active,
    };
    state.modalHoverData = newHoverData;
    this.setState(state);
  }

  render() {
    const {
      id, name, price, discount, stock, variants, Department, images, modalHoverData,
    } = this.state;

    const department = Department;

    // Returns 'loading' div if no data passed in to avoid a pile of console errors
    return (name) ? (
      <AppContainer>
        <DepartmentList department={department} />
        <ImageCarousel
          images={images}
          updateHoverData={this.updateHoverData}
        />
        <ProductDetails
          id={id}
          name={name}
          price={price}
          discount={discount}
          stock={stock}
          variants={variants}
          modalHoverData={modalHoverData}
        />
      </AppContainer>
    ) : ( // If no data from server, displays null page
      <AppContainer>
        <DepartmentList
          department="no response from API"
          updateHoverData={() => {}}
        />
        <ImageCarousel images={['img']} />
        <ProductDetails
          id={0}
          name="null"
          price={0}
          discount={0}
          stock={0}
          variants={[0]}
          modalHoverData={{ x: 0, y: 0, active: false }}
        />
      </AppContainer>
    );
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
