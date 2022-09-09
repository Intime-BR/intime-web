import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import logo from "../../assets/logos/logo.svg";
import clock from "../../assets/logos/clock.svg";
import "./header.css"

const { Header, Sider, Content } = Layout;

type Children = {
  children?: JSX.Element | JSX.Element[];
};

export const HeaderApp: React.FC<Children> = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{background:'#17192E'}}>
          <img
            src={collapsed ? clock : logo}
            alt="intime"
            style={{
              width: "90%",
              height: "48px",
              margin: "8px 0px",
              padding: "1%",
            }}
          />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <Link to="/dashboard">
                  <DashboardOutlined />
                </Link>
              ),
              label: "Dashboard",
            },
            {
              key: "2",
              icon: (
                <Link to="/active-room">
                  <UserOutlined />
                </Link>
              ),
              label: "Salas ativas",
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
