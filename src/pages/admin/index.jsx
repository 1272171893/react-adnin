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
        <Layout>
          <Header></Header>
          <Content style={{ background: "#fff" }}>
            {/* <Home></Home> */}
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/role" component={Role}></Route>
              <Route path="/user" component={User}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "rgba(0,0,0,.5)" }}>
            Footer
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
