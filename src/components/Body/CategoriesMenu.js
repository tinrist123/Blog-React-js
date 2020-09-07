import React, { Component } from 'react';
import TabContent from './TabContentCate';


export default class CategoriesMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idCate: 1,
        }

        this.ontabChange = this.ontabChange.bind(this);
    }
    ontabChange(e) {
        let value = e.target.dataset.cate;
        this.setState({
            idCate: parseInt(value),
        })
    }


    render() {
        console.log("Menu render");
        const { idCate } = this.state;
        return (
            <nav class="nav-categories">
                <ul class="nav-categories__menu">
                    <li class="active">
                        <a data-cate="1" onClick={this.ontabChange}>NEWS</a>
                    </li>
                    <li>
                        <a data-cate="2" onClick={this.ontabChange}>TRAVEL</a>
                    </li>
                    <li>
                        <a data-cate="3" onClick={this.ontabChange}>MUSIC</a>
                    </li>
                </ul>
                <TabContent id={idCate} />
            </nav>
        )
    }
}