import React from "react";
import "./less/index.less";
import logo from "@/assets/image/logo.png";
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
          </div>
        </div>
      </div>
    );
  }
}
