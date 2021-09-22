import React, { Component, lazy ,Suspense } from 'react'
import {Route,Redirect} from 'react-router-dom'
import Pubsub from 'pubsub-js'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
//引入actionCreator，专门用于创建action对象
import { closethewallpaper } from '../../redux/wallp_action'

import MyNavLink from '../../components/MyNavLink'
import './index.scss'

//这些需要放在最底下
import Hot from '../../pages/hot'
const Whitestocking = lazy( ()=>import("../../pages/whitestocking"))
const Anime = lazy( ()=>import("../../pages/anime"))
const Goddess = lazy( ()=>import("../../pages/goddess"))
const Scenery = lazy( ()=>import("../../pages/scenery"))
const Simple = lazy( ()=>import("../../pages/simple"))
const Clean = lazy( ()=>import("../../pages/clean"))
const Jinlun = lazy( ()=>import("../../pages/jinlun"))

export default class Wallpaper extends Component {

    state={
        previewurl:""     //背景皮肤预览效果
    }

    componentDidMount(){    //组件挂载
        this.token = Pubsub.subscribe('changepreview',(msg,stateobj)=>{    //订阅   来自pages的
            this.setState(stateobj)
        })
    }

    componentWillUnmount(){     //组件卸载前
        Pubsub.unsubscribe(this.token)  //关闭订阅
    }

    closeWapper = (event) => {     //关闭
        // console.log(event.target) //触发事件的元素
        //console.log(event.currentTarget)  //绑定事件的元素
        // event.nativeEvent.stopImmediatePropagation();
        store.dispatch(closethewallpaper())
    }

    nonusebgimg = ()=>{     //不使用壁纸
        Pubsub.publish('changepreview',{previewurl:""})         //发布给自己，让预览图片为空
        Pubsub.publish('changebgimg',{bgimgurl:""})             //发布到App.js  改变背景图片为空
    }

    render() {
        let show = store.getState()     //redux
        let {previewurl} =this.state
        const {bgimgurl} = this.props  //App传过来的
        previewurl = previewurl? previewurl :bgimgurl?bgimgurl:""   //没东西展示看看父组件传过来的是不是空了
        return (
            <div className="overshade" style={{ display: show ? 'block' : 'none' }} onClick={this.closeWapper}>
                <div className="wallPaper" onClick={e => e.stopPropagation()}>
                    {/* 防止冒泡 */}
                    <div className="left_top">
                        <ul>
                            {/* 可以换成一个路由，然后传值，因为格式都一样，图片不同罢了 */}
                            <li><MyNavLink to="/hot">热门</MyNavLink></li>
                            <li><MyNavLink to="/whitestocking">白丝</MyNavLink></li>
                            <li><MyNavLink to="/anime">二次元</MyNavLink></li>
                            <li><MyNavLink to="/goddess">女神</MyNavLink></li>
                            <li><MyNavLink to="/scenery">风景</MyNavLink></li>
                            <li><MyNavLink to="/simple">简约</MyNavLink></li>
                            <li><MyNavLink to="/clean">小清新</MyNavLink></li>
                            <li><MyNavLink to="/jinlun">金轮</MyNavLink></li>
                            <li><div className="shu"></div></li>
                            <li>自定义</li>
                            <li>最近使用</li>
                        </ul>
                        <div className="setting">
                            <div className="nonuse-wp">
                                <span>⊘</span>
                                <span onClick={this.nonusebgimg}>不使用壁纸</span>
                            </div>
                            <div className="close-wp" onClick={this.closeWapper}>×</div>
                        </div>
                    </div>
                
                    {/* 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面  */}
                    <Suspense fallback={<Hot/>}>
                        {/* 注册路由 */}
                        <Route path="/hot" component={Hot} />
                        <Route path="/whitestocking" component={Whitestocking} />
                        <Route path="/anime" component={Anime} />
                        <Route path="/goddess" component={Goddess} />
                        <Route path="/scenery" component={Scenery} />
                        <Route path="/simple" component={Simple} />
                        <Route path="/clean" component={Clean} />
                        <Route path="/jinlun" component={Jinlun} />
                        <Redirect to="/hot" />
                        {/* Redirect组件表示如果上面的路由都没有匹配上就去往我指定的to */}
                    </Suspense>
                    <div className="right" style={{ backgroundImage:`url(${previewurl})`}}></div>
                </div>
            </div>
        )
    }
}
