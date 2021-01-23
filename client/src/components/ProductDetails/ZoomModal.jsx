import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = styled.div`
  z-index: 1;
  box-sizing: border-box;
  border: 1px;
  width:400px;
  height:400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Zoom = styled.img`
  position: absolute;
  transition: transform .3s ease-out;
  transform: translate(
    ${(props) => {
    let x = 0;
    let y = 0;
    x += props.mouseX;
    y += props.mouseY;
    // console.log(x,y);
    return `${-(x / 2)}%, ${-(y / 2)}%`;
  }});
  `;

export default function ZoomModal(props) {
  const { hoverData } = props;
  return (
    <Modal active={hoverData.active}>
      <Zoom src="https://media.istockphoto.com/photos/hungry-dog-picture-id497384624?k=6&m=497384624&s=612x612&w=0&h=tw6UCfuumu7BT1NLkWxn6WonsgFLMipop4klDJRWDOc=" alt="dog eating food" mouseX={hoverData.x} mouseY={hoverData.y} />
    </Modal>
  );
}

ZoomModal.propTypes = {
  hoverData: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
};
