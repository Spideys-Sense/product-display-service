import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import ImageCarousel from './ImageCarousel';
import ProductDetails from './ProductDetails';
import DepartmentList from './DepartmentList';
import Header from './Header/Header';

const AppContainer = styled.div`
  font-family: Roboto;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  // min-width: fit-content;
  width: 1200px;
  height: 450px;
  display: grid;
  column-gap: 1%;
  grid-template-rows: 10% 90%;
  grid-template-columns: 39% 60%;
`;
AppContainer.displayName = 'AppContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      id: 0,
      activeImageIndex: 0,
      modalHoverData: {
        x: 0,
        y: 0,
        active: false,
      },
      modalDimensions: {
        width: 0,
        height: 0,
      },
      cartAmount: 0,
      maxPages: 0,
      canScrollUp: false,
      canScrollDown: false,
      page: 0,
    };
    this.updateHoverData = this.updateHoverData.bind(this);
    this.updateCurrentItem = this.updateCurrentItem.bind(this);
    this.changeBigPicture = this.changeBigPicture.bind(this);
    this.updateModalDimensions = this.updateModalDimensions.bind(this);
    this.submitToCart = this.submitToCart.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    // Get data from server
    const { id } = this.props;
    this.updateCurrentItem(id);
  }

  submitToCart(quantity) {
    axios.post(`/api/1/cart/?amount=${quantity}`)
      .then(this.setState({ cartAmount: quantity }));
  }

  updateHoverData(x, y, active, width, height) {
    const { state } = this;
    const newHoverData = {
      x,
      y,
      active,
    };
    if (width && height) {
      newHoverData.width = width;
      newHoverData.height = height;
    } else {
      newHoverData.width = state.modalHoverData.width;
      newHoverData.height = state.modalHoverData.height;
    }
    state.modalHoverData = newHoverData;
    this.setState(state);
  }

  updateModalDimensions(width, height) {
    this.setState({ modalDimensions: { width, height } });
  }

  changeBigPicture(activeImageIndex) {
    this.setState({ activeImageIndex });
  }

  updateCurrentItem(itemId) {
    let newState;
    axios.get(`/api/${itemId}/summary`)
      .then((response) => response.data)
      .then((servedItem) => {
        newState = servedItem;
        return axios.get(`/api/${itemId}/images`);
      })
      .then((response) => response.data.imageUrls)
      .then((servedImages) => {
        newState.images = servedImages;
        newState.maxPages = Math.max((Math.ceil(servedImages.length / 5) - 1), 0);
        newState.canScrollDown = (newState.maxPages > 0);
        newState.activeImageIndex = 0;
        newState.canScrollUp = false;
        newState.page = 0;
        newState.dataLoaded = true;
        this.setState(newState);
      });
  }

  scroll(event) {
    let { page, canScrollUp, canScrollDown } = this.state;
    const { maxPages } = this.state;
    const direction = event.target.value;
    if (direction === 'up') {
      if (page > 0) {
        page -= 1;
        canScrollDown = true;
        if (page === 0) {
          canScrollUp = false;
        }
      }
      this.setState({ canScrollUp, page });
    } else if (direction === 'down') {
      if (page < maxPages) {
        page += 1;
        canScrollUp = true;
        if (page === maxPages) {
          canScrollDown = false;
        }
      }
    }
    this.setState({ page, canScrollUp, canScrollDown });
  }

  render() {
    const {
      dataLoaded,
      id,
      name,
      variantName,
      price,
      discount,
      stock,
      variants,
      Department,
      images,
      activeImageIndex,
      modalHoverData,
      modalDimensions,
      cartAmount,
      maxPages,
      page,
      canScrollUp,
      canScrollDown,
    } = this.state;

    const department = Department;
    // Returns 'loading' div if no data passed in to avoid a pile of console errors
    return (dataLoaded) ? (
      <>
        <Header
          images={images}
          cartAmount={cartAmount}
          variantName={variantName}
          name={name}
          finalPrice={price - discount}
        />
        <AppContainer>
          <DepartmentList department={department} />
          <ImageCarousel
            images={images}
            activeImageIndex={activeImageIndex}
            updateHoverData={this.updateHoverData}
            updateModalDimensions={this.updateModalDimensions}
            changeBigPicture={this.changeBigPicture}
            maxPages={maxPages}
            page={page}
            canScrollUp={canScrollUp}
            canScrollDown={canScrollDown}
            scroll={this.scroll}
          />
          <ProductDetails
            id={id}
            variantName={variantName}
            name={name}
            price={price}
            discount={discount}
            stock={stock}
            variants={variants}
            modalHoverData={modalHoverData}
            modalDimensions={modalDimensions}
            updateCurrentItem={this.updateCurrentItem}
            zoomModalUrl={images[activeImageIndex]}
            submitToCart={this.submitToCart}
          />
        </AppContainer>
      </>
    ) : ( // If no data from server, displays null page
      <em>Loading...</em>
    );
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
