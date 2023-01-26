import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalDestination = document.getElementById('overlays');

const Modal = ({ isCartModal, children }) => {
  return (
    <>
      {isCartModal && createPortal(<Backdrop isCartModal={isCartModal} />, portalDestination)}
      {isCartModal && createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalDestination
      )}
    </>
  );
};

export default Modal;
