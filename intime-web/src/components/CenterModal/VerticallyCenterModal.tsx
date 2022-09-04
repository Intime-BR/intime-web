import React from 'react';
import locker from '../../assets/others/pwd_change.svg';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

type MyVerticallyCenteredModalProps = {
  className?: string;
  isVisible?: boolean;
  title?: string;
  children?: any;
  close?: () => void;
};

const MyVerticallyCenteredModal = ({
  className,
  isVisible,
  title,
  children,
  close,
}: MyVerticallyCenteredModalProps) => {
  return (
    <Modal className={className} show={isVisible} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onHide={close}>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default styled(MyVerticallyCenteredModal)`
  width: 100%;

  .modalText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }

  .modalText img {
    width: 15%;
  }
  .modalText h5 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 600;
  }

  .btn-entrar {
    transition: 0.2s;
    margin-top: 42px;
    height: 58px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color: white;
    background-color: #2734b6cc;
  }

  .btn-entrar:hover {
    background-color: #5d66c4cc;
    transition: 0.2s;
  }
`;
