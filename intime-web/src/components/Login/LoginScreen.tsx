import phones from "../../assets/others/phones.svg";
import logo_purple from "../../assets/logos/logo_purple.svg";
import bottomBall from "../../assets/others/bottomBall.svg";
import styled from "styled-components";
import react, { useCallback, useState } from "react";
import BaseContainer from "../BaseContainer/baseContainer";
import { Button, Form, Input } from "antd";
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import { RequiredMark } from "antd/lib/form/Form";
import ForgotPasswordModal from "./forgotPasswordModal";
import { modalVisibility } from "../../utils/exports";
import BaseButton from "../Button/baseButton";
import { Navigate } from "react-router-dom";
import { loginVerify } from "../../services/loginService";

type LoginProps = {
  className?: string;
};

const Login = ({ className }: LoginProps) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const handleEmailInput = (value: string) => {
    setEmail(value);
    console.log(email);
  };

  const handleSenhaInput = (value: string) => {
    setSenha(value);
  };

  const callback = useCallback(async () => {
    const { status, data } = await loginVerify({
      email: email,
      senha: senha,
    });

    if (status == 200) {
      if (data) {
        localStorage.setItem("logged", "1");
        window.location.reload();
      } else {
        alert("USUARIO E SENHA TA ERRADO");
      }
    } else {
      throw new Error();
    }
  }, [email, senha]);
  // localStorage.setItem("logged", "1");

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
            <div className="ball-container">
              <img className="bottom-ball" src={bottomBall} alt="" />
            </div>
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item label="Informe seu email" rules={[
                    {
                      type: "email",
                      message: "Digite um e-mail válido",
                    },
                    {
                      required: true,
                      message: "Por favor, informe seu E-mail",
                    },
                  ]} required>
                  <Input onChange={(e) => handleEmailInput(e.target.value)} />
                </Form.Item>
                <Form.Item label="Informe sua senha" required>
                  <Input onChange={(e) => handleSenhaInput(e.target.value)} />
                </Form.Item>
                <Form.Item>
                  <BaseButton text="Entrar agora" onClick={callback} />
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
    background: ${(props) => props.theme.colors.lightPrimary};
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 6px;
  }
`;
