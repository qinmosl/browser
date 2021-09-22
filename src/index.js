import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'

//需要用BrowserRouter包裹 路由和路由链接
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,
document.getElementById("root"))

store.subscribe(()=>{
    ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,document.getElementById('root'))
})