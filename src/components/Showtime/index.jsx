import React, { Component } from 'react'

import './index.scss'

export class Showtime extends Component {

           
			// var nowclock = $('clock');
			// var nowweek = $('week');
			// var nowday = $('date');
			// var wuxing = nowweek.children[0];
			// var xingqi = nowweek.children[1];
			// var engxq = nowweek.children[2];


			// var weeklist = new Array();
			// weeklist[0] = new Array('七', 'Sunday', '日曜日');
			// weeklist[1] = new Array('一', 'Monday', '月曜日');
			// weeklist[2] = new Array('二', 'Tuesday', '火曜日 ');
			// weeklist[3] = new Array('三', 'Wednesday', '水曜日');
			// weeklist[4] = new Array('四', 'Thursday', '木曜日');
			// weeklist[5] = new Array('五', 'Friday', '金曜日');
			// weeklist[6] = new Array('六', 'Saturday', '土曜日?');


			// setInterval(function () {
			// 	var date = new Date();
			// 	var mill = date.getMilliseconds(); //获取毫秒
			// 	var s = date.getSeconds();
			// 	var m = date.getMinutes();
			// 	var h = date.getHours();
			// 	var s0 = time0(s);
			// 	var m0 = time0(m);
			// 	var h0 = time0(h);
			// 	nowclock.innerText = h0 + ":" + m0 + ":" + s0;

			// 	var i = date.getDay();
			// 	wuxing.innerText = weeklist[i][2];
			// 	xingqi.innerText = '(' + weeklist[i][0] + ')';
			// 	engxq.innerText = weeklist[i][1];

			// 	var year = date.getFullYear();
			// 	var mouth = date.getMonth() + 1; //月份0-11,所以+1
			// 	var day = date.getDate();
			// 	if (mouth < 10 && day > 9) {
			// 		nowday.innerText = year + "-0" + mouth + "-" + day;
			// 	} else if (mouth > 10 && day < 10) {
			// 		nowday.innerText = year + "-" + mouth + "-0" + day;
			// 	} else if (mouth < 10 && day < 10) {
			// 		nowday.innerText = year + "-0" + mouth + "-0" + day;
			// 	} else {
			// 		nowday.innerText = year + "-" + mouth + "-" + day;
			// 	}

			// }, 1000); //每秒刷新

    render() {
        return (
            <div id="showtime">
               
            </div>
        )
    }
}

export default Showtime
