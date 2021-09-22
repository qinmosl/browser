import React, { Component, Fragment } from 'react'

import Pubsub from 'pubsub-js'

import Header from './components/Header'
import Showtime from "./components/Showtime";
import Search from './components/Search'
import Countdown from './components/Countdown'
import Wallpaper from './components/Wallpaper'
import Rightbar from './components/Rightbar'

import {getCookie} from  './utils/cookie'
import './App.scss';


export default class App extends Component {    //子组件渲染这个父组件就render了
  state={
    bgimgurl:""
  }

  componentDidMount() {    //组件挂载
    let cookieurl =getCookie('cookieurl') 
    console.log(cookieurl)
    if(cookieurl !==null ){                   //网页加载的时候去cookie里面拿背景图
      this.setState({bgimgurl:cookieurl},()=>{
        document.getElementById('root').style["backgroundImage"]=`url(${this.state.bgimgurl}`;
      })   
    }

    this.token = Pubsub.subscribe('changebgimg', (msg, stateobj) => {    //订阅   改变背景图    传过来为空，背景图和cookie自然没值了
      this.setState(stateobj,()=>{
        document.getElementById('root').style["backgroundImage"]=`url(${this.state.bgimgurl}`;

        //保存cookie
        let bgimgurl=this.state.bgimgurl;
        document.cookie = 'cookieurl='+bgimgurl; 

        //可以给个弹窗
      })
    })
  }

  componentWillUnmount() {     //组件卸载前
    Pubsub.unsubscribe(this.token)  //关闭订阅
  }

  render() {
    const {bgimgurl} = this.state
    return (
      <Fragment>
        <Header />
        <Showtime />
        <Search />
        <Countdown />
        <Wallpaper bgimgurl={bgimgurl}/>
        <Rightbar />
      </Fragment>
    )
  }
}
