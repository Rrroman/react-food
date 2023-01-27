import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ closeCartModal }) => {
  return <div className={classes.backdrop} onClick={closeCartModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalDestination = document.getElementById('overlays');

const Modal = ({ children, closeCartModal }) => {
  return (
    <>
      {createPortal(
        <Backdrop closeCartModal={closeCartModal} />,
        portalDestination
      )}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalDestination)}
    </>
  );
};

export default Modal;
