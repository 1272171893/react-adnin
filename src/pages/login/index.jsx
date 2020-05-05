import React from 'react';
import  "./less/index.less";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='login'>
                <h1>hellow world login</h1>
            </div>
        );
    }
}