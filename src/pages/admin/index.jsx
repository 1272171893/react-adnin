import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import utils from "@/utils/storageUtils";
import Header from "@/components/header";
import LeftNav from "@/components/left-nav";
import Home from "@/pages/home";
import Category from "@/pages/category";
import Product from "@/pages/product";
import Role from "@/pages/role";
import User from "@/pages/user";
import "./index.less";
import { Layout } from "antd";
const { Footer, Sider, Content } = Layout;
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = utils.getUser();
    if (!user._id) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout className="layout-container">
          <Header></Header>
          <Content style={{ background: "rgba(0,0,0,.01)", padding: "20px" }}>
            {/* <Home></Home> */}
            <div
              style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
            >
              <Switch style={{ background: "rgba(255,255,255,1)" }}>
                <Route path="/home" component={Home}></Route>
                <Route path="/category" component={Category}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/role" component={Role}></Route>
                <Route path="/user" component={User}></Route>
                <Redirect to="/home"></Redirect>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center", color: "rgba(0,0,0,.5)" }}>
            Footer
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
