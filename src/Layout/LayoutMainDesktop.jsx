import React, { useEffect } from "react";
import { Layout, Menu, theme, Button, Avatar } from "antd";
import {
  FolderAddOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import LoginPageTest from "../pages/LoginPage/LoginPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setProjectData } from "../redux/action/project.js";
import { projectService, usersManageService } from "../services/service.js";
import { setUsersData } from "../redux/action/userManage.js";
import { useState } from "react";

const { Header, Sider, Content } = Layout;
export default function LayoutMainDesktop() {
  let userJson = localStorage.getItem("USER");
  let USER = JSON.parse(userJson);

  const dispatch = useDispatch();
  let curUser = useSelector((state) => state.userReducer.user);
  console.log("curUSER", curUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  function getItem(label, key, icon, children) {
    return {
      label,
      key,
      icon,
      children,
    };
  }
  let handleLogout = () => {
    localStorage.clear();
  };
  const logoutIcon = (
    <NavLink to="/login" onClick={handleLogout}>
      <LogoutOutlined />
    </NavLink>
  );
  useEffect(() => {
    projectService
      .getProjectList()
      .then((result) => {
        dispatch(setProjectData(result.data.content));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  useEffect(() => {
    usersManageService
      .getUsersList()
      .then((result) => {
        dispatch(setUsersData(result.data.content));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const items = [
    getItem(
      "Project Maganement",
      "/",
      <NavLink to="/">
        {" "}
        <UnorderedListOutlined />
      </NavLink>
    ),
    getItem(
      "Create Project",
      "/newproject",
      <NavLink to="/newproject">
        {" "}
        <FolderAddOutlined />
      </NavLink>
    ),
    getItem(
      "User Management",
      "/users",
      <NavLink to="/users">
        {" "}
        <TeamOutlined />
      </NavLink>
    ),
    ,
    getItem(
      "User Setting",
      "/usersetting",
      <NavLink to="/usersetting">
        {" "}
        <SettingOutlined />
      </NavLink>
    ),
  ];
  return (
    <>
      {USER ? (
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={201}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "#15A3EF",
            }}
          >
            <div
              style={{
                backgroundColor: "#15A3EF",
              }}
              className="jiraLogo"
              onClick={() => {
                navigate("/");
              }}
            >
              JIRA
            </div>

            <Menu
              selectedKeys={location.pathname}
              defaultSelectedKeys={location.pathname}
              mode="inline"
              items={items}
              style={{
                backgroundColor: "#15A3EF",
              }}
            />
          </Sider>
          <Layout
            style={{
              transition: "all 0.2s ease-in-out",
              padding: 0,
              marginLeft: `${collapsed ? "80px" : "200px"}`,
              backgroundColor: "#8FD3F7",
              height: "100vh",
            }}
          >
            <Header
              className="flex justify-between"
              style={{
                background: colorBgContainer,
                padding: "10px 20px",
                fontSize: "30px",
                backgroundColor: "#15A3EF",
              }}
            >
              <Button
                className="btnTrigger btnCollapse"
                type="dashed"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",

                  height: 46,
                }}
              />
              <span
                className="flex "
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                {curUser ? (
                  <p>Wellcome {curUser?.name}</p>
                ) : (
                  <p>Wellcome {USER?.name}</p>
                )}

                <Avatar
                  size={30}
                  className="mx-3 my-3 "
                  style={{
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  {curUser
                    ? curUser.name.slice(0, 2).toUpperCase()
                    : USER?.name?.slice(0, 2).toUpperCase()}
                </Avatar>
                <NavLink to="/login" onClick={handleLogout}>
                  <LogoutOutlined style={{ fontSize: "20px", color: "red" }} />
                </NavLink>
              </span>
            </Header>
            <Content
              style={{
                padding: 10,
                margin: "10px 10px ",
                minHeight: "300px",

                overflow: "initial",
                backgroundColor: "#E2F4FD",
                borderRadius: "10px",
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      ) : (
        <div>
          <LoginPageTest />
        </div>
      )}
    </>
  );
}
