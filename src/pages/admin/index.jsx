import React from "react";
import { Redirect } from "react-router-dom";
import utils from "@/utils/storageUtils";
import Header from "@/components/header";
import LeftNav from "@/components/left-nav";
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
          <Content style={{background:"#fff"}}>Content</Content>
          <Footer style={{textAlign:"center",color:"rgba(0,0,0,.5)"}}>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
