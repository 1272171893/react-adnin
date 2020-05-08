import React from "react";
import "./less/index.less";
import logo from "@/assets/image/logo.png";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "@/api";
import { message } from "antd";
import { Redirect } from "react-router-dom";
import utils from "@/utils/storageUtils";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = async (value) => {
    const res = await login(value.username, value.password);
    console.log(res);
    if (res.status === 1) {
      message.error(res.msg);
      return;
    }
    const user = res.data;
    utils.saveUser(user)
    message.success("登录成功");
    this.props.history.replace("/");
  };
  render() {
    const user = utils.getUser();
    if(user._id){
        return <Redirect to="/" ></Redirect>
    }
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
              size="middle"
              onFinish={this.handleSubmit}
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入正确的用户名",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入正确的密码",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
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
