import React from "react";
import "./index.less";
import { Link } from "react-router-dom";
import logo from "@/assets/image/logo.png";
import { Menu } from "antd";
import menuList from "@/config/menuConfig";
const { SubMenu } = Menu;

export default class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getMenuNodes = (values) => {
    return values.map((item) => {
      if (item.children && item.children.length !== 0) {
        return (
            <SubMenu key={item.key}  title={item.title}>
                {this.getMenuNodes(item.children)}
            </SubMenu>
          );
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      );
    });
  };
  render() {
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/home">
          <img src={logo} alt="" />
          <h1>后台管理</h1>
        </Link>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.getMenuNodes(menuList)}
          {/* <Menu.Item key="/home" >
            <Link to="/home">
              <span>首页</span>
            </Link>
          </Menu.Item>

          <SubMenu key="sub1"  title="Navigation One">
            <Menu.Item key="/category" >
              <Link to="/category">
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/product" >
              <Link to="/product">
                <span>商品管理</span>
              </Link>
            </Menu.Item> */}
          {/* </SubMenu> */}
        </Menu>
      </div>
    );
  }
}
