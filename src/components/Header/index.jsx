import React, { Component } from 'react'

import Topmenu from '../Topmenu'

import './index.scss'

export class Header extends Component {

    state ={
        imgenter:false //菜单图标是否被选中
    }

    mouseEnter = ()=>{   
        this.setState({imgenter:true})
    }

    mouseLeave =()=>{
        this.setState({imgenter:false})
    }
    
   
    render() {
        const {imgenter} =this.state
        return (
            <div className="top">         
                <div className="top_left">
                   <iframe title="ifr" className="iframe" src="http://i.tianqi.com/index.php?c=code&a=getcode&id=34&h=20&w=280" frameBorder="0" scrolling="no" hspace="0" height="20"></iframe>
                </div>

                <div className="top_right">
                    <a className="top_login" href="http://www.baidu.com">
                       <span className="top_img_wrapper">
                           <img src="https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/icon/%E7%99%BB%E5%BD%95.png"  alt="头像"></img>
                        </span>
                       <span>
                        {
                            // 登录了展示QQ昵称 否则展示QQ登录图标
                             "我寄人间雪满头"
                        }
                       </span>
                    </a>
                    <div className="top_menu" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        <img src="https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/icon/%E8%8F%9C%E5%8D%95.png" title="菜单" alt="菜单"></img>
                    </div>

                    <Topmenu imgenter={imgenter}/>
                </div>
                
            </div>
        )
    }
}

export default Header
