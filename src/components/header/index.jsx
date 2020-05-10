import React from "react";
import "./index.less";
import { withRouter } from "react-router-dom";
import utils from "@/utils/storageUtils";
import { Modal } from "antd";
import menuList from "@/config/menuConfig";
import { getWeather } from "@/api";
const { confirm } = Modal;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
      dayPictureUrl: "",
      weather: "",
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      });
    }, 1000);
    this.getWeathers();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getWeathers = async () => {
    const {dayPictureUrl,weather} = await getWeather("深圳");
    this.setState({
        dayPictureUrl,weather
    })
  };
  loginOut = () => {
    confirm({
      title: "确认退出吗",
      onOk: () => {
        utils.removeUser();
        this.props.history.replace("/login");
      },
      onCancel: () => {},
    });
  };
  getTitle = () => {
    let title = "";
    const path = this.props.location.pathname;
    menuList.map((item) => {
      if (item.key === path) {
        title = item.title;
      } else if (item.children && item.children.length !== 0) {
        const cItem = item.children.find((it) => it.key === path);
        if (cItem) {
          title = cItem.title;
        }
      }
    });
    return title;
  };
  render() {
    const user = utils.getUser();
    const title = this.getTitle();
    return (
      <div className="header-container">
        <div className="top-container">
          <span>欢迎登录，{user.username}</span>
          <a href="javascript:" onClick={this.loginOut}>
            退出
          </a>
        </div>
        <div className="bot-container">
          <div className="bot-left">{title}</div>
          <div className="bot-right">
            <span>{this.state.time}</span>
            <img src={this.state.dayPictureUrl} alt="weather" />
            <span>{this.state.weather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
