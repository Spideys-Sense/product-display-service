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
  constructor(props) {
    super(props);
    const { maxPages, updatePageReset } = props;
    this.state = {
      canScrollUp: false,
      canScrollDown: (maxPages > 0),
      page: 0,
    };

    this.scroll = this.scroll.bind(this);
    updatePageReset(this.resetPage.bind(this));
  }

  resetPage() {
    this.setState({ page: 0 });
  }

  scroll(event) {
    let { page, canScrollUp, canScrollDown } = this.state;
    const { maxPages } = this.props;
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
    const { urls, changeBigPicture, activeImageIndex } = this.props;
    const { canScrollUp, canScrollDown, page } = this.state;
    return (
      <ListWrapper>
        <UpButton enabled={canScrollUp} onClick={this.scroll} value="up">▲</UpButton>
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
        <DownButton enabled={canScrollDown} onClick={this.scroll} value="down">▼</DownButton>
      </ListWrapper>
    );
  }
}

ImageList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeBigPicture: PropTypes.func.isRequired,
  activeImageIndex: PropTypes.number.isRequired,
};
