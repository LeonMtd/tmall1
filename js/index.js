window.onload = function(){
    var oLi = document.getElementById("categoryMenu").getElementsByTagName("li");
    var oUl = document.getElementById("content").getElementsByTagName("ul");
    for(var i=0; i<oLi.length; i++){
        oLi[i].index=i;
        oLi[i].onmouseover = function(){
            for(var n=0; n<oUl.length;n++){
                oUl[n].className="display1";
            }
            oUl[this.index].className="display";

            for(var i=0;i<oLi.length;i++){
                oLi[i].className="";
            }
            this.className="color";

        };
    }
//从li上移走时，li颜色不变，ul的display:none
    for(var i=0; i<oLi.length; i++){
        oLi[i].onmouseout = function(){
            for(var n=0; n<oUl.length;n++){
                oUl[n].className="display1";
            }
            for(var i=0;i<oLi.length;i++){
                oLi[i].className="";
            }

        };
    }
//当鼠标在ul上移动时，相应的li变色，鼠标停留的ul的display：block
    for(var n=0; n<oUl.length; n++){
        oUl[n].index=n;
        oUl[n].onmouseover = function(){
            for(var n=0; n<oUl.length;n++){
                oUl[n].className="display1";
            }
            this.className="display";

            for(var i=0;i<oLi.length;i++){
                oLi[i].className="";
            }
            oLi[this.index].className="color";

        };
    }
//当鼠标从ul上移走时，li颜色不变，ul的display:none
    for(var n=0; n<oUl.length; n++){
        oUl[n].index=n;
        oUl[n].onmouseout = function(){
            for(var n=0; n<oUl.length;n++){
                oUl[n].className="display1";
            }

            for(var i=0;i<oLi.length;i++){
                oLi[i].className="";
            }

        };
    }

       // 轮播图
    var oBox = document.getElementById("box");
    var aUl = oBox.getElementsByTagName("ul");//！！！！！！！！犯的错误是将下面两个li找错，由于总共有3个ul,想找li必须限定在oBox这个div中找
    var aImg = aUl[0].getElementsByTagName("li");
    var aNum = aUl[1].getElementsByTagName("li");
    // var aImg = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
    // var aNum = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
    var index = 0;
    // var timer  = null;
    var play = null;
    var timer = null;
    //当鼠标放到图片上时，自动播放停止
    oBox.onmouseover = function(){
      clearInterval(play);
    };
    //当鼠标从图片上移出时，继续自动播放
    oBox.onmouseout = function(){
      autoPlay();
    };
    //当鼠标点击切换按钮时，图片切换到相应的图片
    for(var i=0; i<aNum.length; i++){
        aNum[i].index = i;
        aNum[i].onclick = function(){
            show(this.index);
        }
    }
    //    自动播放
    function autoPlay() {
        var bOrder = true;
        play = setInterval(function(){
            bOrder ? index++ :index--;
            //正序播放
            index >= aImg.length&&(index = aImg.length - 2,bOrder = false);

            //逆序播放
            index <= 0 && (index = 0 ,bOrder = true);

            show(index);
        },4000);

    }
    autoPlay();

//    图片切换效果，淡入淡出效果
    function show(a) {
        index = a;
        var alpha =0;
        for(var i=0; i<aNum.length; i++){
            aNum[i].className="";
        }
        aNum[index].className="current";
       clearInterval(timer);
    //    实现图片的淡入淡出的切换效果
        for(var n=0; n<aImg.length; n++){
            aImg[n].style.opacity = 0;
        }
        //每隔20ms，切换一个透明度
        timer = setInterval(function(){
            alpha += 2;
            (alpha >=100) && (alpha == 100);
            aImg[index].style.opacity = alpha/100;
            alpha == 100 && clearInterval(timer);//!!!!!!!!!犯的错误是少写了一个&!!!!!!!!!!!

        },20)
        // aImg[index].style.opacity = 1;


    }

}