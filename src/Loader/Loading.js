import React, { Component } from 'react';


export default class Loading extends Component {
    render() {
        return (<div style={{ minHeight: "400px", display: "flex", justifyContent: 'center', alignItems: 'center' }} >
            <ul className="loading-animation alternate">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul></div>);
    }
}