import { Modal } from "antd";
import React from "react";
import styled from "styled-components";

type DataTableModalProps = {
  className?: String;
  isVisible?: boolean;
  title?: String;
  onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  okButtonText?: String;
  children?: any;
  width?: string | number;
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
      okText={okButtonText}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default styled(DataTableModal)``;
