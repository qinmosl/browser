//吸顶
var top_height = $('top_in').offsetTop; //距离有定位的父节点的距离

//回到顶部/回到底部
var upbegin = 0,
    upend = 0,
    downbegin = 0,
    downend = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    uptime = null,
    downtime = null,
    sch = 0;

    window.addEventListener('scroll', function () {
        sch = (document.body.scrollTop || document.documentElement.scrollTop); //滚动高度
        upbegin = sch;
        downbegin = sch;

        var scrh = document.documentElement.scrollTop; //页面滚出高度	  																		
        if (scrh >= top_height) {
            $('top_in').className = 'top_in2'; //属性设置或返回元素的 class 属性
        } else {
            $('top_in').className = 'top_in';
        }

        //右侧菜单的出现
        if (document.documentElement.scrollTop > 480) {
            document.getElementsByClassName('menu')[0].style.opacity = 1;
        } else {
            document.getElementsByClassName('menu')[0].style.opacity = 0;
        }
    });

    var upflag = false,
    downflag = false;
$('up').addEventListener('click', function () {
    if (!upflag) {
        upflag = true;
        downflag = true;
        clearInterval(uptime);
        uptime = setInterval(function () {
            upbegin += (upend - upbegin) * 0.2; //缓动动画 从快到慢
            window.scrollTo(0, upbegin); //滚到(0,begin)处
            if (Math.round(upbegin) == upend) { //四舍五入 清除定时器
                clearInterval(uptime);
                upflag = false;
                downflag = false;
            }
        }, 25);
    }


});

$('down').addEventListener('click', function () {
    if (!downflag) {
        upflag = true;
        downflag = true;
        clearInterval(downtime);
        downtime = setInterval(function () {
            downbegin += (downend - downbegin) * 0.2; //缓动动画
            window.scrollTo(0, downbegin); //滚到(0,begin)处
            if (Math.ceil(downbegin) == downend) { //四舍五入 清除定时器
                clearInterval(downtime);
                upflag = false;
                downflag = false;
            }
        }, 25);
    }
});