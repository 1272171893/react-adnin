import React from 'react';
export default class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='bar'>
                <h1>bar</h1>
            </div>
        );
    }
}