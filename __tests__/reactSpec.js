/* eslint-disable react/jsx-filename-extension */

/*

 In the interest of saving myself time I'm leaving off more complex unit testing for now

 Concepts for future unit tests are included below

 If I come back, I want to separate test suites for each component into their own file

*/

import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from '../client/src/components';
import DepartmentList from '../client/src/components/DepartmentList';
import ImageCarousel from '../client/src/components/ImageCarousel';
import ProductDetails from '../client/src/components/ProductDetails';
import ProductHeader from '../client/src/components/ProductDetails/ProductHeader';
import PriceView from '../client/src/components/ProductDetails/PriceView';
import VariantSelector from '../client/src/components/ProductDetails/VariantSelector';
import CartWidget from '../client/src/components/ProductDetails/CartWidget';
import InStock from '../client/src/components/ProductDetails/InStock';

Enzyme.configure({ adapter: new Adapter() });

describe('product_display_view', () => {
  describe('App', () => {
    let wrapper;
    beforeEach(async (done) => {
      wrapper = shallow(<App id={50} />);
      await wrapper.update();
      done();
    });

    test('should have its elements present', () => {
      expect(wrapper.exists('AppContainer')).toBe(true);
      expect(wrapper.exists('DepartmentList')).toBe(true);
      expect(wrapper.exists('ImageCarousel')).toBe(true);
      expect(wrapper.exists('ProductDetails')).toBe(true);
    });
  });

  describe('CartWidget', () => {
    let wrapper;
    beforeEach(async (done) => {
      wrapper = shallow(<CartWidget />);
      await wrapper.update();
      done();
    });
    test('should have its elements present', () => {
      expect(wrapper.exists('BuyBox')).toBe(true);
      expect(wrapper.exists('CartWidgetForm')).toBe(true);
      expect(wrapper.exists('QuantityDropDown')).toBe(true);
      expect(wrapper.exists('CartButton')).toBe(true);
      expect(wrapper.exists('FavoriteButton')).toBe(true);
    });
  // • Its dropdown should have selectable options
  // • It should submit post requests
  });

  describe('PriceView', () => {
  // PriceView
  // • It should have its elements present
  // • It should show price information
  });

  describe('InStock', () => {

  // InStock
  // • It should have its elements present
  // • It should say if an item is/isn't in stock
  });
  describe('ProductHeader', () => {

  // ProductHeader
  // • It should have its elements present
  // • It should show the name of the product
  });
  describe('VariantSelector', () => {

  // VariantSelector
  // • It should have its elements present
  // • It should have clickable optons
  // • Its options should scale with variant quantity
  // * It should change App's active item on click
  });
  describe('ProductDetails', () => {

  // ProductDetails
  // • It should have its elements present
  });
  describe('ImageCarousel', () => {

  // ImageCarousel
  // • It should have its elements present
  // • It should scroll on clicking scroll buttons
  });
  describe('ImageList', () => {

  // ImageList
  // • It should have its elements present
  // • Should have n image children based on input n urls
  });
  describe('ImageListEntry', () => {

  // ImageListEntry
  // • Should contain a linked image
  // • It should change the active BigPicture on hover
  });
  describe('BigPicture', () => {

  // BigPicture
  // • Should show a large picture
  });
});
