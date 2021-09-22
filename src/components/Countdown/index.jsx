import React, { Component } from 'react'

import Pubsub from 'pubsub-js'
import {todayInfo,daytoList} from '../../utils/timefun'
import './index.scss'
export default class Countdown extends Component {

    state={
        countdownmode:"高考",
        showcountdown:false
    }
    componentDidMount(){
        this.token = Pubsub.subscribe('changecountdown', (msg, stateobj) => {    //订阅   改变背景图    传过来为空，背景图和cookie自然没值了
            this.setState(stateobj)
        })
    }

    componentWillUnmount() {     //组件卸载前
        Pubsub.unsubscribe(this.token)  //关闭订阅
    }

    render() {
        const {countdownmode ,showcountdown} =this.state
        let itemlist = [0,1,2,3,4,5,6,7,8,9]
        let timelist = daytoList( todayInfo("2022/6/27") )   
        //console.log(timelist)
        return (
            <div className="countdown" style={{display:showcountdown?"":"none"}}>
                <div className="cd-item text">
                    距离
                    <span>{countdownmode}</span>
                    还有
                </div>
                <div className="cd-item">
                    <ul className="hundreds" style={{ top:`-${timelist[0]*100}px` }}>
                        {
                            itemlist.map((item)=>{
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="cd-item">
                    <ul className="tens" style={{ top:`-${timelist[1]*100}px` }}>
                        {
                            itemlist.map((item)=>{
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="cd-item">
                    <ul className="units" style={{ top:`-${timelist[2]*100}px` }}>
                        {
                            itemlist.map((item)=>{
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
