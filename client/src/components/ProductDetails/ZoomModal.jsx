import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = styled.div`
  opacity: ${(props) => ((props.active) ? 1 : 0)};
  pointer-events: none;
  transition: opacity .3s linear;
  grid-area: 1 / 1 / 5 / 3;
  margin-right: 10%;
  margin-top: -15px;
  box-shadow: 0 0 2px 2px gray;
  z-index: 1;
  box-sizing: border-box;
  border: 1px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ZoomBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: ${((props) => {
    const { x, y } = props.hoverData;
    return `${x}% ${y}%`;
  })};
  background-size: 250%;
  transition:background-position .3s linear;
  `;

function ZoomModal(props) {
  const { hoverData, zoomModalUrl } = props;
  // const { picHeight, picWidth, url } = this.state;
  return (
    <Modal active={hoverData.active}>
      <ZoomBg
        img={zoomModalUrl}
        hoverData={hoverData}
      />
    </Modal>
  );
}

export default ZoomModal;

ZoomModal.propTypes = {
  hoverData: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
  zoomModalUrl: PropTypes.string.isRequired,
};
