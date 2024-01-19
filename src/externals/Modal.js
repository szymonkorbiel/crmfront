// Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ onClose, selectedOffer, children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="close-button"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
