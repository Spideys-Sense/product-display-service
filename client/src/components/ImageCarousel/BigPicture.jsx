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
    this.updateHoverData = props.updateHoverData;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseMove(e) {
    const { updateHoverData } = this.props;

    const rect = e.target.getBoundingClientRect();

    const xCenter = Math.round(rect.width / 2);
    const yCenter = Math.round(rect.height / 2);

    const mouseX = Math.round(e.clientX - rect.x);
    const mouseY = Math.round(e.clientY - rect.y);

    const xPos = mouseX - xCenter;
    const yPos = mouseY - yCenter;
    updateHoverData(xPos, yPos, true);
  }

  handleMouseLeave(e) {
    const { updateHoverData } = this.props;

    updateHoverData(0, 0, false);
  }

  handleMouseEnter(e) {
    const { updateHoverData } = this.props;

    updateHoverData(0, 0, true);
  }

  render() {
    const { url } = this.props;
    return (
      <BigPictureFrame>
        <Img src={url} onPointerMove={this.handleMouseMove} onPointerEnter={this.handleMouseEnter} onPointerLeave={this.handleMouseLeave} />
      </BigPictureFrame>
    );
  }
}

BigPicture.propTypes = {
  url: PropTypes.string.isRequired,
  updateHoverData: PropTypes.func.isRequired,
};
