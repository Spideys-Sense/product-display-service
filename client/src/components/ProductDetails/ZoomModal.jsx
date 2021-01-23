import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = styled.div`
  z-index: 1;
  box-sizing: border-box;
  border: 1px;
`;

export default function ZoomModal(props) {
  const { hoverData } = props;
  return (
    <Modal
      active={hoverData.active}
      mouseX={hoverData.x}
      mouseY={hoverData.y}
    />
  );
}

ZoomModal.propTypes = {
  hoverData: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
};
