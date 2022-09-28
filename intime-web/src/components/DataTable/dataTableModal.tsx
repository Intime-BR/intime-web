import { Modal } from "antd";
import React from "react";
import styled from "styled-components";
import './dataTable.css'

type DataTableModalProps = {
  className?: String;
  isVisible?: boolean;
  title?: String;
  onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  okButtonText?: String;
  children?: JSX.Element | JSX.Element[];
  width?: string | number;
  height?: string | number;
};

const DataTableModal = ({
  className,
  isVisible,
  title,
  onOk,
  onCancel,
  okButtonText,
  children,
  width,
}: DataTableModalProps) => {
  return (
    <Modal
      title={title}
      centered
      onOk={onOk}
      visible={isVisible}
      onCancel={onCancel}
      cancelText={"Cancelar"}
      okText={okButtonText}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default styled(DataTableModal)``;
