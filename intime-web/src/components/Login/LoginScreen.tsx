import phones from "../../assets/others/phones.svg";
import logo_purple from "../../assets/logos/logo_purple.svg";
import bottomBall from "../../assets/others/bottomBall.svg";
import styled from "styled-components";
import react, { useCallback, useEffect, useState } from "react";
import BaseContainer from "../BaseContainer/baseContainer";
import { Button, Form, Input, Spin } from "antd";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import { RequiredMark } from "antd/lib/form/Form";
import ForgotPasswordModal from "./forgotPasswordModal";
import { modalVisibility } from "../../utils/exports";
import BaseButton from "../Button/baseButton";
import { Navigate, useNavigate } from "react-router-dom";
import { loginVerify } from "../../services/loginService";
import { toast, ToastContainer } from "react-toastify";

type LoginProps = {
  className?: string;
};

const Login = ({ className }: LoginProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const handleEmailInput = (value: string) => {
    setEmail(value);
  };

  const handleSenhaInput = (value: string) => {
    setSenha(value);
  };

  const callback = useCallback(async () => {
    setLoading(true);
    const { status, data } = await loginVerify({
      email: email,
      senha: senha,
    });
    if (data) {
      localStorage.setItem("logged", "true");
      setLoading(false);
      setTimeout(() => window.location.reload(), 450);
    } else {
      toast.error("Email ou senha inválidos", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
      localStorage.clear();
    }
  }, [email, senha]);

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div className={className}>
      <ToastContainer />
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
            <img className="phones" src={phones} alt="exemplo aplicativo" />
            <div className="ball-container">
              <img className="bottom-ball" src={bottomBall} alt="bola" />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="right-side">
            <div className="container login-card">
              <img className="logo" src={logo_purple} alt="logotipo" />
              <p className="title mt-4">Seja bem-vindo!</p>
              <p className="desc">Faça login para gerenciar suas informações</p>
              <Form
                form={form}
                layout="vertical"
                initialValues={{ requiredMarkValue: requiredMark }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Informe seu email"
                  htmlFor="email"
                  rules={[
                    {
                      type: "email",
                      message: "Digite um e-mail válido",
                    },
                    {
                      required: true,
                      message: "Por favor, informe seu E-mail",
                    },
                  ]}
                  required
                >
                  <Input
                    id="email"
                    onChange={(e) => handleEmailInput(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Informe sua senha" htmlFor="senha" required>
                  <Input
                    id="senha"
                    type="password"
                    onChange={(e) => handleSenhaInput(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  {!loading ? (
                    <Button className="btnLogin" onClick={callback}>
                      Entrar agora
                    </Button>
                  ) : (
                    <Button className="btnLogin">
                      <Spin />
                    </Button>
                  )}
                </Form.Item>
              </Form>

              <div className="text-center">
                <a
                  className="forgetPassword"
                  onClick={() => setIsVisible(modalVisibility(isVisible))}
                >
                  Esqueci minha senha?
                </a>
                <ForgotPasswordModal
                  isVisible={isVisible}
                  onCancel={() => setIsVisible(modalVisibility(isVisible))}
                  onOk={() => setIsVisible(modalVisibility(isVisible))}
                  okButtonText="Salvar"
                  width={800}
                >
                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                    <p
                      className=""
                      style={{
                        fontSize: "32px",
                        fontWeight: "400",
                        marginTop: "48px",
                        marginBottom: "20px",
                      }}
                    >
                      Recuperação de senha
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        marginBottom: "56px",
                        width: "90%",
                      }}
                    >
                      Para redefinir sua senha, informe o e-mail cadastrado na
                      sua conta e lhe enviaremos um link com as instruções
                    </p>
                    <div className="col-md-10">
                      <Form
                        form={form}
                        layout="vertical"
                        initialValues={{ requiredMarkValue: requiredMark }}
                        onValuesChange={onRequiredTypeChange}
                        requiredMark={requiredMark}
                      >
                        <Form.Item label="Email">
                          <Input />
                        </Form.Item>
                      </Form>
                      <div style={{ marginTop: "64px", marginBottom: "72px" }}>
                        <BaseButton text="Verificar" />
                      </div>
                    </div>
                  </div>
                </ForgotPasswordModal>
              </div>
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
  overflow-x: hidden;

  .row {
    height: 100vh;
    background: rgba(250, 250, 250, 0.602);
  }

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
    box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 24px;
    margin-top: 15px;
    width: 75%;
    min-height: 50%;
    height: auto;
  }
  .phones {
    object-fit: contain;
    margin-top: 42px;
    margin-bottom: -18px;
    width: 80%;
    height: 80%;
  }

  .ball-container {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }

  .bottom-ball {
    width: 100%;
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

  .title {
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.colors.textGray};
    margin: 0;
  }

  .desc {
    font-weight: 400;
    font-size: 18px;
    color: ${(props) => props.theme.colors.textGray};
    margin: 0;
    margin-bottom: 24px;
  }

  .left-title {
    padding: 45px 45px 0px 45px;
  }

  .forgetPassword {
    color: ${(props) => props.theme.colors.textGray};
    text-decoration: underline;
  }

  .btnLogin {
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    width: 100%;
    height: 40px;
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 6px;
  }

  .ant-spin-dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: #ffffff;
    border-radius: 100%;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    opacity: 0.3;
    -webkit-animation: antSpinMove 1s infinite linear alternate;
    animation: antSpinMove 1s infinite linear alternate;
  }
`;
