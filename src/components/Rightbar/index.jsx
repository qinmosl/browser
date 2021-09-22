import React, { Component } from 'react'

import './index.scss'

export default class Rightbar extends Component {

    state = {
        toolshow: false,    //工具栏是否展示
        contactshow: false  //联系我们列表是否展示
    }

    mouseEnter = (module) => {   //移入
        if (module === "contact") {
            this.setState({ contactshow: true })
        } else {
            this.setState({ toolshow: true })
        }

    }

    mouseLeave = (module) => {   //移出
        if (module === "contact") {
            this.setState({ contactshow: false })
        } else {
            this.setState({ toolshow: false })
        }
    }

    render() {

        const { toolshow, contactshow } = this.state
        return (
            <div className="rightbar">
                <ul className="sidebar">
                    <li onMouseEnter={() => this.mouseEnter("tool")} onMouseLeave={() => this.mouseLeave("tool")}>
                        <i className="rb-icon-1"></i>
                        <span>功能收纳</span>
                    </li>
                    <li onMouseEnter={() => this.mouseEnter("contact")} onMouseLeave={() => this.mouseLeave("contact")}>
                        <i className="rb-icon-2"></i>
                        <span>联系我们</span>
                    </li>
                </ul>

                <div className="tool-path" style={{ display: toolshow ? '' : "none" }} onMouseEnter={() => this.mouseEnter("tool")} onMouseLeave={() => this.mouseLeave("tool")}>
                    <div className="path-frame" >
                        <div className="avatar item1">
                            <img src="https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/icon/%E6%89%93%E7%A0%81.png" alt="图片打码" />
                        </div>
                        <div className="avatar item2">
                            <img src="https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/icon/%E6%89%93%E7%A0%81.png" alt="图片水印" />
                        </div>
                        <div className="avatar item3">
                            <img src="https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/icon/%E6%89%93%E7%A0%81.png" alt="查询Q绑" />
                        </div>
                        <div className="avatar item4">
                            <img src="https://react-1305405728.cos.ap-nanjing.myqcloud.com/browser/icon/%E6%89%93%E7%A0%81.png" alt="带我走吧" />
                        </div>
                    </div>
                </div>


                <div className="contact" style={{ display: contactshow ? 'block' : 'none' }} onMouseEnter={() => this.mouseEnter("contact")} onMouseLeave={() => this.mouseLeave("contact")}>
                    <div className="link">
                        <span className="contact-item-l"></span>
                        <span className="contact-item-r">
                            <span className="contact-item-title">点击进入Q群</span>
                            <span className="number">819684956</span>
                        </span>
                    </div>

                    <div className="tocall">
                        <span className="contact-item-l"></span>
                        <span className="contact-item-r">
                            <span className="contact-item-title">智能客服</span>
                            <span>智能客服24小时在线为您解答</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
