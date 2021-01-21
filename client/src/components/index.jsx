import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageCarousel from './ImageCarousel';
import ProductDetails from './ProductDetails';
import DepartmentList from './DepartmentList';

const AppContainer = styled.div`
  margin: auto;
  min-width: 90%;
  min-height: 80vh;
  max-width: 55vw;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 530px 650px;
  grid-template-rows: 10% 90%;
`;
AppContainer.displayName = 'AppContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
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

  render() {
    const {
      id, name, price, discount, stock, variants, Department, images,
    } = this.state;

    const department = Department;

    // Returns 'loading' div if no data passed in to avoid a pile of console errors
    return (name) ? (
      <AppContainer>
        <DepartmentList department={department} />
        <ImageCarousel images={images} />
        <ProductDetails
          id={id}
          name={name}
          price={price}
          discount={discount}
          stock={stock}
          variants={variants}
        />
      </AppContainer>
    ) : (
      <AppContainer>
        <DepartmentList department={'null'} />
        <ImageCarousel images={['img']} />
        <ProductDetails
          id={0}
          name={'null'}
          price={0}
          discount={0}
          stock={0}
          variants={[0]}
        />
      </AppContainer>
    );
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
