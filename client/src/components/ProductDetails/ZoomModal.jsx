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
  // background-color: rgba(0, 0, 0, .25);
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

const Zoom = styled.img`
  position: absolute;
  transition: transform .3s ease-out;
  transform: scale(2, 2) translate(
    ${(props) => {
    let x = 0;
    let y = 0;
    x += props.mouseX;
    y += props.mouseY;
    // console.log(x,y);
    return `${-(x)}px, ${-(y)}px`;
  }});
  `;

class ZoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      picWidth: 0,
      picHeight: 0,
    };
    this.zoomBox = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    // const { hoverData } = this.props;
    // if (hoverData.url !== prevState.url) {
    //   const box = this.zoomBox.current;
    //   console.log(box.getBoundingClientRect());
    //   this.setState({ url });
    // }
  }

  render() {
    const { hoverData, zoomModalUrl } = this.props;
    return (
      <Modal active={hoverData.active}>
        <Zoom src={zoomModalUrl} alt="dog eating food" mouseX={hoverData.x} mouseY={hoverData.y} ref={this.zoomBox} />
      </Modal>
    );
  }
}

export default ZoomModal;

ZoomModal.propTypes = {
  hoverData: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
};
