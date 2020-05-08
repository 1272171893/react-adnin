import React from "react";
import { Redirect } from "react-router-dom";
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user_key = window.localStorage.getItem("user_key") || {};
    const user = JSON.parse(user_key);
    // console.log(user);
    if(!user._id){
        return <Redirect to="/login" ></Redirect>
    }
    return (
      <div className="Admin">
        <h1>hellow world admin</h1>
      </div>
    );
  }
}
