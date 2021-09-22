import React from 'react';
import { Modal } from 'react-bootstrap';

type PopupProps = {
  show: boolean;
  onHide?: any;
};

export const Popup: React.FC<PopupProps> = ({ children,onHide, ...props }) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{children}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};
