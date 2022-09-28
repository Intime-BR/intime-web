import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import React, { CSSProperties, useEffect, useState } from "react";
import logo from "../../assets/logos/logo.svg";
import clock from "../../assets/logos/clock.svg";
import "./header.css";
import { useMediaQuery } from "react-responsive";

const { Header, Sider, Content } = Layout;

type ChildrenProps = {
  children?: any;
};

export const HeaderApp = (props: ChildrenProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState<number>();
  const [sideNavStyle, setSideNavStyle] = useState<CSSProperties>();

  const isNormalScreen = useMediaQuery({ minWidth: 1100 });
  const isSmallScreen = useMediaQuery({ minWidth: 691 });
  const isMobile = useMediaQuery({ minWidth: 690 });

  const customNavStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "10",
    height: "100vh",
  };

  const handleCollaps = () => {
    if (!isNormalScreen) {
      return isSmallScreen
        ? (setCollapsedWidth(80), setCollapsed(true), setSideNavStyle({}))
        : isMobile &&
            (setCollapsedWidth(0),
            setCollapsed(true),
            setSideNavStyle(customNavStyle));
    } else {
      setCollapsed(false);
      setSideNavStyle({});
    }
  };

  useEffect(() => {
    handleCollaps();
  }, [isNormalScreen, isSmallScreen, isMobile]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={collapsedWidth}
        style={sideNavStyle}
      >
        <div className="logo" style={{ background: "#17192E" }}>
          {(isNormalScreen || isSmallScreen) && (
            <img
              src={collapsed ? clock : logo}
              alt="logotipo"
              style={{
                width: "90%",
                height: "48px",
                margin: "8px 0px",
                padding: "1%",
              }}
            />
          )}
        </div>
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "24px 24px",
              alignItems: "center",
              fontSize: "14px",
              height: "64px",
              background: "#17192e",
              color: "white",
            }}
          >
            <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
          </div>
        ) : (
          false
        )}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ justifyContent: "space-between" }}
          items={[
            {
              key: "1",
              className: "icon-style",
              icon: (
                <Link to="/dashboard">
                  <div className="icon-style dash">
                    <DashboardOutlined />
                  </div>
                </Link>
              ),
              label: "Dashboard",
            },
            {
              key: "2",
              icon: (
                <Link to="/active-room">
                  <div className="icon-style">
                    <UserOutlined />
                  </div>
                </Link>
              ),
              label: "Salas ativas",
            },
            {
              key: "3",
              icon: (
                <Link to="/register-users">
                  <div className="icon-style">
                    <PlusCircleOutlined />
                  </div>
                </Link>
              ),
              label: "Cadastro de usuários",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: "0px 24px", color: "#ffff" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "0px",
            padding: 0,
            height: "auto",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
