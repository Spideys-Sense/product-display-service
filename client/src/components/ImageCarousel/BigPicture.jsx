/* eslint-disable no-useless-constructor */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// grid-area: 1 / 2 / 1 / 2;

const BigPictureFrame = styled.div`
  margin: 10px;
  bottom: 1px;
  border: 1px green dashed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
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
