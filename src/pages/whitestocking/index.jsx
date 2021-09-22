import React, { Component } from 'react'

import Pubsub from 'pubsub-js'
import './index.scss'
export default class Whitestocking extends Component {

    state ={
        imgurl:[
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi1.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi2.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi3.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi4.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi5.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi6.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi7.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi8.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi9.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi10.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi11.jpg",
            "https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/background/baisi12.jpg"
        ]
    }

    mouseEnter = (item)=>{   //移入图片
        //console.log(item)
        //发布消息 使订阅更新 改变state 从而改变预览图片
        Pubsub.publish('changepreview',{previewurl:item})
    }

    mouseLeave =()=>{   //移出图片
       
    }

    changebgimg=(item)=>{    //改变背景图片
        Pubsub.publish('changebgimg',{bgimgurl:item})
    }

    render() {
        const {imgurl} = this.state
        return (
            <div className="wallpaper-left">
                {
                    imgurl.map((item,index)=>{
                        return <div key={item}
                            onMouseEnter={()=>this.mouseEnter(item)} onMouseLeave={this.mouseLeave} onClick={()=>this.changebgimg(item)}
                            style={{ backgroundImage:`url(${item})`}} className={index===1?"aa":index===7?"bb":""}></div>
                    })
                }
                {/* <div className="aa" >1</div>
                <div >2</div>
                <div >3</div>
                <div >4</div>
                <div >5</div>
                <div >6</div>
                <div className="bb">7</div>
                <div >8</div>
                <div >9</div>
                <div >10</div>
                <div >11</div>
                <div >12</div> */}
            </div>
        )
    }
}
