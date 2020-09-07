import React, { Component } from 'react';


export default class Spinner extends Component {
    render() {
        return (
            <div class="mainDiv">
                <div class="innerDiv">
                    <h2>LOADING.....</h2>
                    <div class="bar">
                        <div class="mainBar"></div>
                    </div>
                </div>
            </div>
        );
    }
}