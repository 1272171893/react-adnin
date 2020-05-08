import React from "react";
import "./index.less";
import { Link, withRouter } from "react-router-dom";
import logo from "@/assets/image/logo.png";
import { Menu } from "antd";
import menuList from "@/config/menuConfig";
const { SubMenu } = Menu;

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  componentWillMount(){
    this.MenuNodes= this.getMenuNodes(menuList)
  }
  getMenuNodes = (values) => {
    const Keys = this.props.location.pathname;
    return values.map((item) => {
      if (item.children && item.children.length !== 0) {
        const falg = item.children.some((it) => it.key === Keys);
        if(falg){
           this.openMenu=item.key
        }
        return (
          <SubMenu key={item.key} title={item.title}>
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
    const seleectKey = this.props.location.pathname;
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/home">
          <img src={logo} alt="" />
          <h1>后台管理</h1>
        </Link>
        <Menu
          selectedKeys={[seleectKey]}
          defaultOpenKeys={[this.openMenu]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.MenuNodes}
        </Menu>
      </div>
    );
  }
}
export default withRouter(LeftNav);
