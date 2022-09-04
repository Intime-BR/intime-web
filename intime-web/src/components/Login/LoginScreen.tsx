import mobilehand from '../../assets/others/mobilehand.png';
import logo_purple from '../../assets/logos/logo_purple.svg';
import ball1 from '../../assets/geometry/Ball1.svg';
import ball2 from '../../assets/geometry/Ball2.svg';
import ball3 from '../../assets/geometry/Ball3.svg';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import VerticallyCenterModal from '../CenterModal/VerticallyCenterModal';
import react, { useState } from 'react';
import locker from '../../assets/others/pwd_change.svg';

type LoginProps = {
  className?: string;
};

const Login = ({ className }: LoginProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <section className={`${className} row`}>
      <div className="col-md-4 login_side1">
        <p className="h2 text_side1_1">Manter a pontualidade nunca foi tão fácil.</p>
        <p className="h4 text_side1_2 h-25">Gerencie as turmas e receba feedbacks de performance e desenvolvimento.</p>
        <img src={mobilehand} alt="Mobile Hand" className="img" />

        <img
          src={ball1}
          alt="ball"
          style={{
            width: '7%',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
        <img
          src={ball2}
          alt="ball"
          style={{
            width: '6%',
            position: 'absolute',
            top: '142px',
            left: '412px',
          }}
        />
        <img
          src={ball3}
          alt="ball"
          style={{
            width: '8%',
            position: 'absolute',
            bottom: '0',
            left: '512px',
            zIndex: '',
          }}
        />
      </div>
      <div className="col-md-8 login_side2">
        <div className="login">
          <img src={logo_purple} alt="Logo Intime" className="logo" />
          <p
            style={{
              fontFamily: 'poppins',
              color: '#484D58',
              fontWeight: '700',
              marginTop: '64px',
              fontSize: '42px',
            }}
          >
            Seja Bem Vindo!
          </p>
          <p
            style={{
              fontFamily: 'inter',
              color: '#484D58',
              fontWeight: '700',
              marginTop: '-20px',
              fontSize: '32px',
            }}
          >
            Faça login para gerenciar suas informações.
          </p>
          <Form style={{ marginTop: '80px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '24px' }}>Informe seu e-mail</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                style={{
                  backgroundColor: '#94A3B84D',
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={{ marginTop: '64px' }}>
              <Form.Label style={{ fontSize: '24px' }}>Informe sua senha</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                style={{
                  backgroundColor: '#94A3B84D',
                }}
              />
            </Form.Group>
            <button type="submit" className="w-100 btn-entrar">
              Entrar Agora
            </button>
          </Form>
          <div
            style={{
              textAlign: 'center',
              marginTop: '24px',
            }}
          >
            {/* Component that was used for render the modal */}
            <button type="button" className="pwdModalBtn" onClick={() => setVisibility(!visibility)}>
              Esqueci minha senha?
            </button>
          </div>
        </div>
      </div>
      <VerticallyCenterModal
        className="login-modal"
        isVisible={visibility}
        title="Recuperação de Senha"
        close={() => setVisibility(!visibility)}
      >
        <div className="modalText">
          <img src={locker} alt="Cadeado" />
          <h5>Informe seu email para modificar sua senha</h5>
          <Form style={{ width: '90%' }}>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '18px', marginBottom: '-7px' }}>E-mail</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                style={{
                  backgroundColor: '#94A3B84D',
                  width: '100%',
                }}
              />
            </Form.Group>
            <button
              type="button"
              className="w-100 btn-entrar"
              style={{
                height: '52px',
              }}
            >
              Verificar
            </button>
          </Form>
        </div>
      </VerticallyCenterModal>
    </section>
  );
};

export default styled(Login)`
  width: 100%;
  height: 100%;

  * {
    padding: 0;
    margin: 0;
    overflow-y: hidden;
  }

  .text_side1_1 {
    font-family: 'Poppins', sans-serif;
    width: 80%;
  }

  .text_side1_2 {
    width: 80%;
    font-family: 'Inter', sans-serif;
  }

  .pwdModalBtn {
    background-color: transparent;
    color: #383838;
    border: none;
    transition: 0.3s;
  }

  .pwdModalBtn:hover {
    transition: 0.3s;
    color: rgb(88, 88, 216);
    text-decoration: underline;
  }

  .img {
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .logo {
    width: 25%;
  }

  .login {
    margin-top: 42px;
    width: 70%;
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

  .form-control {
    border: transparent solid 2px !important;
  }

  .form-control:focus {
    border: solid 2px !important;
    border-color: #86b7fe !important;
    box-shadow: 0 0 2px rgb(13 110 253 / 25%) !important;
    outline: 0 !important;
  }

  .login_side1 {
    background-color: #17192e;
    height: 100vh;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login_side2 {
    z-index: +2;
    background-color: #fafafa;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
