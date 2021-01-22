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
      mouseX: 0,
      mouseY: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.x);
    const y = Math.round(e.clientY - rect.y);
    console.log(x, y);
    this.setState({
      mouseX: x,
      mouseY: y,
    });
  }

  render() {
    const { url } = this.props;
    return (
      <BigPictureFrame onPointerMove={this.handleMouseMove}>
        <Img src={url} />
      </BigPictureFrame>
    );
  }
}

BigPicture.propTypes = {
  url: PropTypes.string.isRequired,
};
