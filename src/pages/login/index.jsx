import React from "react";
import "./less/index.less";
import logo from "@/assets/image/logo.png";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Received values of form: ", e);
  };
  render() {
    return (
      <div className="login-container">
        <div className="header-container">
          <img src={logo} alt="后太登录页面" />
          <h1>后台登录页面</h1>
        </div>
        <div className="form-container">
          <div className="title">欢迎登陆</div>
          <div className="main">
            <Form
              onSubmit={this.handleSubmit}
              name="normal_login"
              className="login-form"
            >
              <Form.Item>
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登 陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
