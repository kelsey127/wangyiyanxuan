import React, { Component } from 'react';
import pic1 from '../../assets/img/j4.png'
import pic2 from '../../assets/img/j1.jpg'
import pic3 from '../../assets/img/j2.jpg'
import pic4 from '../../assets/img/j3.jpg'
import pic5 from '../../assets/img/j5.jpg'
import pic6 from '../../assets/img/j6.jpg'
import Swiper from '../../assets/swiper/dist/js/swiper.esm.bundle'
import '../../assets/swiper/dist/css/swiper.min.css'

import './index.stylus'
export default class Recommend extends Component {
    componentDidMount(){
        //轮播图
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            clickable: true,
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })
    }

    render(){
        return <div className="recommend">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src={pic1} alt=""/></div>
                    <div className="swiper-slide"><img src={pic2} alt=""/></div>
                    <div className="swiper-slide"><img src={pic3} alt=""/></div>
                    <div className="swiper-slide"><img src={pic4} alt=""/></div>
                    <div className="swiper-slide"><img src={pic5} alt=""/></div>
                    <div className="swiper-slide"><img src={pic6} alt=""/></div>
                </div>
                <div className="swiper-pagination"></div>   
            </div>    
        </div>
    }
}