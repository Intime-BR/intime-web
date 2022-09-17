import { Modal } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { modalVisibility } from "../../utils/exports";

type ForgotPasswordModalProps = {
  className?: string;
  isVisible?: boolean;
  title?: String;
  onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  okButtonText?: String;
  children?: JSX.Element | JSX.Element[];
  width?: string | number;
};

const ForgotPasswordModal = ({
  className,
  isVisible,
  title,
  onOk,
  onCancel,
  okButtonText,
  children,
  width,
}: ForgotPasswordModalProps) => {
  return (
    <div className={className}>
      <Modal
        title={title}
        centered
        onOk={onOk}
        visible={isVisible}
        onCancel={onCancel}
        okText={okButtonText}
        width={width}
        footer={null}
      >
        {children}
      </Modal>
    </div>
  );
};

export default styled(ForgotPasswordModal)``;
