import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalDestination = document.getElementById('overlays');

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalDestination)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalDestination)}
    </>
  );
};

export default Modal;
