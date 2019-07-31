import React, { Component } from 'react'
import {NavLink, Route, Redirect, Switch } from 'react-router-dom'
import { Icon} from 'antd'
import Recommend from '../recommend'
import Homelife from '../homelife'
import Clothes from '../clothes'
import Food from '../food'
import './home.styl'

export default class Home extends Component {
    state={
        isRotate:false,
    }
   
    //向下图标点击旋转
    handleRotate =()=>{
        this.setState({
            isRotate:!this.state.isRotate,
            isShow:!this.state.isDisplay
        })
    }

    render(){
        const {isRotate} = this.state
        let styleObj = {
            transform: isRotate?"rotateZ(180deg)":"rotateZ(0deg)",
            transition:"1s"
        }

        return <div className="home">
            <div className="homeHeader">
                <span className="title">网易严选</span>
                <input type="text" placeholder="搜索商品，共21600款好物" className="search"/>
                <button className="loginButton">登录</button>
            </div>
            <div className="homeContent">
                <div className="homeNav">
                    <span className="Router">
                        <NavLink className="nav-item" activeClassName="my-active" to="/home/recommend">推荐</NavLink>
                        <NavLink className="nav-item" activeClassName="my-active" to="/home/homelife">居家生活</NavLink>
                        <NavLink className="nav-item" activeClassName="my-active" to="/home/clothes">服饰鞋包</NavLink>
                        <NavLink className="nav-item" activeClassName="my-active" to="/home/food">美食酒水</NavLink>
                    </span>
                    <span style={styleObj} onClick={this.handleRotate} className="arrow-down">
                        <Icon type="down"/>
                    </span>    
                </div>
                <div className="home-router">
                    <Switch>
                        <Route path="/home/recommend" component={Recommend} />
                        <Route path="/home/homelife" component={Homelife} />
                        <Route path="/home/clothes" component={Clothes} />
                        <Route path="/home/food" component={Food} />
                        <Redirect to="/home/recommend"/>
                    </Switch>
                </div>
            </div>
        </div>
    }
}