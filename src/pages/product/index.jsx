import React from 'react';
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='product'>
                <h1>product</h1>
            </div>
        );
    }
}