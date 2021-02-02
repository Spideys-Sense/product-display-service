import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageListEntry from './ImageListEntry';

const ListWrapper = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  height: fit-content;
  bottom: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageSliderFrame = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 5px;
`;

const ImageSlider = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.4s ease-in-out;
  transform: translateY(-${(props) => (props.page * 350)}px);
`;

const ScrollButton = styled.button`
  all: unset;
  font-size: 20px;
  height: 24px;
  width: fit-content;
  border: 0;
  margin: 0 auto;
  }};

`;

const UpButton = styled(ScrollButton)`
${(props) => {
    if (props.enabled) {
      return `color: #115AB0;
              &:hover {
                transform: scale(1.2, 1.2) translateY(-2px);
              }`;
    }
    return 'color: #D5D5D5;';
  }}
`;

const DownButton = styled(ScrollButton)`
${(props) => {
    if (props.enabled) {
      return `color: #115AB0;
              &:hover {
                transform: scale(1.2, 1.2) translateY(2px);
              }`;
    }
    return 'color: #D5D5D5;';
  }}
`;

export default class ImageList extends React.Component {
  render() {
    const {
      urls, changeBigPicture, activeImageIndex, canScrollUp, canScrollDown, page, scroll,
    } = this.props;
    return (
      <ListWrapper>
        <UpButton enabled={canScrollUp} onClick={scroll} value="up">▲</UpButton>
        <ImageSliderFrame>
          <ImageSlider page={page}>
            {urls.map((url, i) => (
              <ImageListEntry
                url={url}
                i={i}
                key={`IMG${i + 1}`}
                changeBigPicture={changeBigPicture}
                activeImageIndex={activeImageIndex}
              />
            ))}
          </ImageSlider>
        </ImageSliderFrame>
        <DownButton enabled={canScrollDown} onClick={scroll} value="down">▼</DownButton>
      </ListWrapper>
    );
  }
}

ImageList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeBigPicture: PropTypes.func.isRequired,
  activeImageIndex: PropTypes.number.isRequired,
};
