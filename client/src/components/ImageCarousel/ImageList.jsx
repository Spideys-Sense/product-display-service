import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageListEntry from './ImageListEntry';


const ListWrapper = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  height: fit-content;
  margin: 10px;
  bottom: 1px;
  border: 1px green dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageSliderFrame = styled.div`
  box-sizing: border-box;
  margin: 0;
  background-color: yellow;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border: 1px gray solid;
  border-radius: 5px;
`;

const ImageSlider = styled.div`
  margin: 0;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  translateY(y): ${(props) => props.page * 350}px;
`;

const ScrollButton = styled.button`
  position: relative;
  font-size: 20px;
  height: 30px;
  width: fit-content;
  border: 0;
  padding: 2px 4px;
  margin: 0 auto;
  color: ${(props) => ((props.enabled) ? '#115AB0' : '#D5D5D5')}
`;

const UpButton = styled(ScrollButton)`
  // top: -30px;
`;
const DownButton = styled(ScrollButton)`
  // bottom: -30px;
`;

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canScrollUp: false,
      canScrollDown: true,
      page: 0,
    };
  }

  render() {
    const { urls } = this.props;
    const { canScrollUp, canScrollDown, page } = this.state;
    return (
      <ListWrapper>
        <UpButton enabled={canScrollUp}>▲</UpButton>
        <ImageSliderFrame>
          <ImageSlider>
            {urls.map((url, i) => <ImageListEntry url={url} key={`IMG${i + 1}`} />)}
          </ImageSlider>
        </ImageSliderFrame>
        <DownButton enabled={canScrollDown}>▼</DownButton>
      </ListWrapper>
    );
  }
}

ImageList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
