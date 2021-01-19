import React from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel';
import ProductDetails from './ProductDetails';
import DepartmentList from './DepartmentList';

const AppContainer = styled.div`
  margin: auto;
  min-width: 90%;
  min-height: 80vh;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 10% 90%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    // Get data from server
    this.setState({
      id: 50,
      name: 'Home-cooked ferret treats',
      price: 3543,
      discount: 1323,
      stock: 10,
      variants: [
        1,
        26,
        85,
      ],
      Department: 'dog > Food > Wet',
      images: [
        'placeimg.com/640/480',
        'placeimg.com/640/480',
        'placeimg.com/640/480',
        'placeimg.com/640/480',
        'placeimg.com/640/480',
        'placeimg.com/640/480',
        'placeimg.com/640/480',
        'placeimg.com/640/480',
      ],
    });
  }

  render() {
    const {
      name, price, discount, stock, variants, Department, images,
    } = this.state;

    const department = Department;

    // Returns 'loading' div if no data passed in to avoid a pile of console errors
    return (name) ? (
      <AppContainer>
        <DepartmentList department={department} />
        <ImageCarousel images={images} />
        <ProductDetails
          name={name}
          price={price}
          discount={discount}
          stock={stock}
          variants={variants}
        />
      </AppContainer>
    ) : (
      <div>Loading</div>
    );
  }
}

export default App;
