import styled from "styled-components";
import LoginScreen from "../../components/Login/LoginScreen";
import Cat from "../../assets/others/cat.svg";
import LogoPurple from "../../assets/others/logopurple.svg";
import { Link } from "react-router-dom";

type NotFound = {
  className?: string;
};

const NotFound = ({ className }: NotFound) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="logo">
          <img src={LogoPurple} alt="" width={"200px"} />
        </div>
        <div className="center-container row">
          <div className=" col-lg-6 col-sm-12 text-content">
            <h1 className="number">404</h1>
            <p>Oops! Parece que você se perdeu.</p>
            <p>Não conseguimos encontrar o que você está procurando.</p>

            <Link to="/dashboard">
            <button>Dashboard</button>
            </Link>
          </div>

          <div className="image col-lg-6 col-sm-12">
            <img src={Cat} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(NotFound)`
  .logo {
    padding-top: 30px;
  }

  .center-container {
    margin-top: 60px;
  }

  .number {
    font-size: 90px;
    margin-top: 20%;
    font-weight: bold;
    margin-bottom: 0px;
    color: ${(props) => props.theme.colors.purpleDark};
  }

  p {
    margin-top: 10px;
    font-size: 24px;
  }

  button {
    background: ${(props) => props.theme.colors.primary};
    border: none;
    padding: 10px 30px;
    border-radius: 6px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
  }
`;
