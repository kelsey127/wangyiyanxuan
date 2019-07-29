import React, { Component } from 'react';
import './home.styl'

export default class Home extends Component {
    render(){
        return <div className="home">
            <div className="homeHeader">
                <span className="title">网易严选</span>
                <input type="text" placeholder="搜索商品，共21600款好物" className="search"/>
                <button className="loginButton">登录</button>
            </div>
        </div>
    }
}