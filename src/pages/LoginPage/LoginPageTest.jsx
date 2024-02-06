import "./loginPageTest.css";
import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/user";
import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
export default function LoginPage() {
 
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("values", values);

    let onSuccess = () => (window.location.href = "/");
    dispatch(loginAction(values, onSuccess));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Fail to login!!!");
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" hello mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <div className="text-center ">
            <Form.Item>
              Or{" "}
              <NavLink to={"/register"}>
                <a href="" style={{ color: "#ffffff" }}>
                  Register Now!
                </a>
              </NavLink>
            </Form.Item>
          </div>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form
              className=" flex flex-col align-center justify-center login-form"
              style={{ paddingTop: "10px" }}
              name="normal_login"
             
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {/* Email */}
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập Email của bạn!",
                  },
                ]}
              >
                <Input
                  style={{
                    
                    width: "400px",
                    height: "50px",
                  }}
                  prefix={<MailOutlined className=" site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              {/* Password */}
              <Form.Item
                name="passWord"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập Mật khẩu của bạn!",
                  },
                ]}
              >
                <Input
                  style={{
                   
                    width: "400px",
                    height: "50px",
                  }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Mật khẩu"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="text"
                  htmlType="submit"
                  className="btnBlue"
                  style={{
                    backgroundColor: "rgb(102, 117, 223)",
                    minWidth: "400px",
                  }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FacebookOutlined
                      style={{ fontSize: "20px", color: "#3b5998" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <TwitterOutlined
                      style={{ fontSize: "20px", color: "#1da1f2" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <GoogleOutlined
                      style={{ fontSize: "20px", color: "#db4437" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
