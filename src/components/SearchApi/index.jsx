import React, { Component,Fragment } from 'react'

export default class SearchApi extends Component {
    search=(data) =>{
        console.log(data)
        // var oUl=document.getElementById("ul1");
        // var html="";
        // //当有提示内容时才显示，否则隐藏
        // if(data.s.length){
        //     //这个接口返回给我们的是像search({q:"d",p:false,s:["电影天堂","大麦网","电视剧","dnf","地图","dota2","dhl","豆瓣","大众点评","电影"]})这样形式的json，s后面跟的就是百度数据库里提示的内容，我们就根据s来做后面的内容
        //     oUl.style.display="block";
        //     for(var i=0;i<data.s.length;i++){
        //         html+='<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+data.s[i]+'</a></li>';
        //     }
        //     oUl.innerHTML=html;
        // }else{
        //     oUl.style.display="none";
        // }
    }
    render() {
        
        return (
            <Fragment>
                <script src="http://suggestion.baidu.com/su?wd=嘉然&cb=search"></script>
            </Fragment>
        )
    }
}
