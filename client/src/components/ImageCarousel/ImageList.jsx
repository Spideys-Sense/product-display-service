import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageListEntry from './ImageListEntry';

const ListContainer = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  margin: 10px;
  bottom: 1px;
  border: 1px green dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SlidingImageList = styled.div`

`;

const ScrollButton = styled.button`
  margin: 0 auto;
  color: ${(props) => ((props.active) ? '#115AB0' : '#D5D5D5')}
`;

export default function ImageList(props) {
  const { urls } = props;
  console.log(urls);
  return (
    <ListContainer>
      <ScrollButton>▲</ScrollButton>
      <SlidingImageList>
        {urls.map((url, i) => <ImageListEntry url={url} key={`IMG${i + 1}`} />)}
      </SlidingImageList>
      <ScrollButton>▼</ScrollButton>
    </ListContainer>
  );
}

ImageList.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
