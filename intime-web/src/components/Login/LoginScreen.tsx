import phones from "../../assets/others/phones.svg";
import logo_purple from "../../assets/logos/logo_purple.svg";
import bottomBall from "../../assets/others/bottomBall.svg";
import styled from "styled-components";
import react, { useState } from "react";
import BaseContainer from "../BaseContainer/baseContainer";
import { Button, Form, Input } from "antd";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import { RequiredMark } from "antd/lib/form/Form";

type LoginProps = {
  className?: string;
};

const Login = ({ className }: LoginProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div className={className}>
      <div className="row">
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className="left-side">
            <h4 className="left-title text-white">
              Manter a pontualidade nunca foi tão fácil.
            </h4>
            <hr className="hr" />
            <p className="desc-text">
              Gerencie as turmas e receba feedbacks de performance e
              desenvolvimento.
            </p>
            <img className="phones" src={phones} />
            <img className="bottom-ball" src={bottomBall} alt="" />
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="right-side">
            <div className="container login-card">
              <img className="logo" src={logo_purple} alt="" />
              <p className="title mt-4">Seja bem-vindo!</p>
              <p className="desc">Faça login para gerenciar suas informações</p>
              <Form
                form={form}
                layout="vertical"
                initialValues={{ requiredMarkValue: requiredMark }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <Form.Item label="Informe seu email" required>
                  <Input />
                </Form.Item>
                <Form.Item label="Informe sua senha" required>
                  <Input />
                </Form.Item>
                <Form.Item>
                  <button className="login-button" type="button">
                    Entrar agora
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Login)`
  width: 100%;
  height: 100%;

  .left-side {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    color: white;
    background: rgba(75, 82, 157, 0.8);
  }
  .right-side {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .login-card {
    width: 75%;
    height: 50%;
  }
  .phones {
    object-fit: cover;
    margin-bottom: -12px;
    margin-top: 70px;
    width: 340px;
    height: 370px;
  }

  .bottom-ball {
    width: 100%;
    height: auto;
  }

  .hr {
    width: 90%;
  }

  .desc-text {
    font-size: 18px;
    max-width: 90%;
  }

  .logo {
    width: 120px;
  }

  .login-button {
    color: #ffffff;
    font-size: 16px;
    width: 100%;
    height: 40px;
    background: ${(props) => props.theme.colors.lightPrimary};
    border: 1px solid #ffffff;
    border-radius: 6px;
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    color: #484d58;
    margin: 0;
  }

  .desc {
    font-weight: 400;
    font-size: 18px;
    color: #484d58;
    margin: 0;
    margin-bottom: 24px;
  }

  .left-title {
    padding: 45px 45px 0px 45px;
  }
`;
