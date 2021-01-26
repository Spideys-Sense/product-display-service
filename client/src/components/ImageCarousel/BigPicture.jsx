/* eslint-disable no-useless-constructor */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BigPictureFrame = styled.div`
  grid-area: 1 / 2 / 1 / 2;
  max-width: 35vw;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: zoom-in;
`;

const Img = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 430px;
  box-shadow: 0 0 5px 5px white inset;
`;

export default class BigPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throttleUpdate: false,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.refDimensions = this.refDimensions.bind(this);
    this.throttledUpdate = this.throttledUpdate.bind(this);

    this.myRef = React.createRef();
  }

  handleMouseMove(e) {
    const { xPercent, yPercent } = this.getMousePosPercentage(e);

    this.throttledUpdate(xPercent, yPercent, true);
  }

  handleMouseLeave(e) {
    const { updateHoverData } = this.props;
    const { xPercent, yPercent } = this.getMousePosPercentage(e);
    updateHoverData(xPercent, yPercent, false);
  }

  handleMouseEnter(e) {
    const { updateModalDimensions } = this.props;
    const box = this.refDimensions();
    const { xPercent, yPercent } = this.getMousePosPercentage(e);

    this.throttledUpdate(xPercent, yPercent, false);
    updateModalDimensions(box.width, box.height);
  }

  getMousePosPercentage(event) {
    const box = this.refDimensions();

    const mouseX = Math.round(event.clientX - box.x);
    const mouseY = Math.round(event.clientY - box.y);

    const xPercent = ((mouseX / box.width).toFixed(2) * 100);
    const yPercent = ((mouseY / box.height).toFixed(2) * 100);

    return { xPercent, yPercent };
  }

  throttledUpdate(x, y, active) {
    // Improve client performance & animation smoothness slightly
    // by only updating zoom modal's position every 5ms
    const { throttleUpdate } = this.state;
    if (!throttleUpdate) {
      this.setState({
        throttleUpdate: true,
      });
      setTimeout(() => {
        this.setState({ throttleUpdate: false });
      }, 5);
      const { updateHoverData } = this.props;
      updateHoverData(x, y, active);
    }
  }

  refDimensions() {
    const dimensions = this.myRef.current.getBoundingClientRect();
    return dimensions;
  }

  render() {
    const { url } = this.props;
    return (
      <BigPictureFrame>
        <Img
          src={url}
          onPointerMove={this.handleMouseMove}
          onPointerEnter={this.handleMouseEnter}
          onPointerLeave={this.handleMouseLeave}
          ref={this.myRef}
        />
      </BigPictureFrame>
    );
  }
}

BigPicture.propTypes = {
  url: PropTypes.string.isRequired,
  updateHoverData: PropTypes.func.isRequired,
  updateModalDimensions: PropTypes.func.isRequired,
};
