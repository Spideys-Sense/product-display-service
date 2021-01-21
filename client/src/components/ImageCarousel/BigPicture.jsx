import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BigPictureFrame = styled.div`
  grid-area: 1 / 2 / 1 / 2;
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
  object-fit: cover;
`;

export default class BigPicture extends React.Component {
  constructor(props) {
    super(props);

    const { url } = props;

    this.state = {
      url,
    };
  }

  render() {
    const { url } = this.state;
    return (
      <BigPictureFrame>
        <Img src={url} />
      </BigPictureFrame>
    );
  }
}

BigPicture.propTypes = {
  url: PropTypes.string.isRequired,
};
