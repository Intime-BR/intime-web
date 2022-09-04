import React from "react";
import styled from "styled-components";

type DynamicSuggestionsCardProps = {
  className?: string;
  children: any;
};

// PASSANDO AS PROPS CORRETAS ELE MONTA OS VALORES DE FORMA DINAMICA
const DynamicSuggestionsCard = ({
  className,
  children,
}: DynamicSuggestionsCardProps) => {
  return (
    <div className={`${className} col-md-5 col-sm-12`}>
      <div className="title-div">Justificativa de faltas pendentes</div>
      {children}
    </div>
  );
};

export default styled(DynamicSuggestionsCard)`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  /* background: ${(props) => props.theme.colors.primary}; */
  background: #fafafa;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .title-div {
    min-width: 100%;
    margin-left: 4%;
    margin-top: 3%;
    margin-bottom: 2%;
    height: auto;
    font-size: 18px;
    font-weight: 500;
  }

  .div-flex-row {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 2%;
    margin-bottom: 2%;
    > img {
      width: 50px;
      height: 50px;
      margin-left: 0;
      object-fit: cover;
      border-radius: 20%;
      margin: 2% 2% 2% 2%;
    }
  }

  .div-flex-column {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    > .name {
      font-size: 18px;
      letter-spacing: 1px;
      margin-bottom: 0;
      margin-top: 3%;
    }

    > .desc {
      width: 100%;
      padding-right: 3%;
      color: rgba(0, 0, 0, 0.53);
    }
  }

  .div-status-date {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    /* border: solid 2px #000; */
    > .div-status {
      text-align: center;
      width: auto;
      min-width: 15%;
      height: 100%;
      color: #ffffff;
      background: #ebaa02;
      padding: 0 3% 0 3%;
      border-radius: 24px;
    }

    > .div-date {
      margin-right: 6%;
    }
  }
`;
