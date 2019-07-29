import React,{Component } from 'react'
import {NavLink, Route, Redirect, Switch } from 'react-router-dom';
import Home from "./components/home"
import Topic from "./components/topic"
import Cart from "./components/cart"
import CateList from "./components/cateList"
import Person from "./components/person"
import "./App.css"

export default class App extends Component{
    render(){
        return <div className="wrap">
            <div className="footer-bar">
                <div className="footer-icon">
                    <NavLink className="footer-item" activeClassName="my-active" to="/home">
                        <i className="iconfont icon-home"></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink className="footer-item" activeClassName="my-active" to="/cateList">
                        <i className="iconfont icon-category"></i>
                        <span>分类</span>
                    </NavLink>
                    <NavLink className="footer-item" activeClassName="my-active" to="/topic">
                        <i className="iconfont icon-picture-square"></i>
                        <span>识物</span>
                    </NavLink>
                    <NavLink className="footer-item" activeClassName="my-active" to="/cart">
                        <i className="iconfont icon-14shopcar"></i>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink className="footer-item" activeClassName="my-active" to="/person">
                        <i className="iconfont icon-person"></i>
                        <span>个人</span>
                    </NavLink>
                </div>
            </div>
            <div className="content">
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/topic" component={Topic} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/cateList" component={CateList} />
                  <Route path="/person" component={Person} />
                  <Redirect to="/Home"/>
                </Switch>
            </div>
        </div>
        
    }
}