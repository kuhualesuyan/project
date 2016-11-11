/**
 * Created by Administrator on 2016/11/4.
 */
var headimg1 = document.getElementById("headimg1");
var headimg2 = document.getElementById("headimg2");
var headimg3 = document.getElementById("headimg3");
headimg1.onmouseover = function(){
  headimg1.src = "../images/shouye/1.png";
}
headimg1.onmouseout = function(){
  headimg1.src = "../images/shouye/headimg1.png";
}
headimg2.onmouseover = function(){
  headimg2.src = "../images/shouye/2.png";
}
headimg2.onmouseout = function(){
  headimg2.src = "../images/shouye/headimg2.png";
}
headimg3.onmouseover = function(){
  headimg3.src = "../images/shouye/3.png";
}
headimg3.onmouseout = function(){
  headimg3.src = "../images/shouye/headimg3.png";
}
var jiantouimg = document.getElementById("jiantouimg");
var guoqi = document.getElementById("guoqi");
jiantouimg.onmouseover = function(){
  guoqi.style.display = "block";
}
jiantouimg.onmouseout = function(){
  guoqi.style.display = "none";
}

var home = document.getElementById("home");
var underline1 = document.getElementById("underline1");
var jordan = document.getElementById("jordan");
var underline2 = document.getElementById("underline2");
var nike = document.getElementById("nike");
var underline3 = document.getElementById("underline3");
var adidas = document.getElementById("adidas");
var underline4 = document.getElementById("underline4");
var news = document.getElementById("news");
var underline5 = document.getElementById("underline5");
home.onmouseover = function(){
  underline1.style.display = "block";
}
home.onmouseout = function(){
  underline1.style.display = "none";
}
home.onclick = function(){
  home.style.color = 'orange';
  underline1.style.display = "block";
}
jordan.onmouseover = function(){
  underline2.style.display = "block";
}
jordan.onmouseout = function(){

  underline2.style.display = "none";
}
jordan.onclick = function(){
  jordan.style.color = 'orange';
  underline2.style.display = "block";
}
nike.onmouseover = function(){
  underline3.style.display = "block";
}
nike.onmouseout = function(){
  underline3.style.display = "none";
}
nike.onclick = function(){
  nike.style.color = 'orange';
  underline2.style.display = "block";
}
adidas.onmouseover = function(){
  underline4.style.display = "block";
}
adidas.onmouseout = function(){
  underline4.style.display = "none";
}
adidas.onclick = function(){
  adidas.style.color = 'orange';
  underline2.style.display = "block";
}
news.onmouseover = function(){
  underline5.style.display = "block";
}
news.onmouseout = function(){
  underline5.style.display = "none";
}
news.onclick = function(){
  news.style.color = 'orange';
  underline2.style.display = "block";
}
var sousuoimg = document.getElementById("sousuoimg");
var suosouchangeimg = document.getElementById('sousuochangeimg');
var menu_ul = document.getElementById("menu_ul");
var input_div = document.getElementById("input_div");
sousuoimg.onclick = function(){
  sousuoimg.style.display = "none";
  suosouchangeimg.style.display = "block";
  menu_ul.style.display = "none";
  input_div.style.display = "block";
}


var goumai_div = document.getElementById("goumai_div");
goumai_div.onclick = function(){
  goumai_div.style.backgroundColor = "orange";
}
goumai_div.onmouseover = function(){
  goumai_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai_div.onmouseout = function(){
  goumai_div.style.backgroundColor = "transparent";
}


var goumai1_div = document.getElementById("goumai1_div");
goumai1_div.onclick = function(){
  goumai1_div.style.backgroundColor = "orange";
}
goumai1_div.onmouseover = function(){
  goumai1_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai1_div.onmouseout = function(){
  goumai1_div.style.backgroundColor = "transparent";
}
var shouye2 = document.getElementById("shouye2");
var opacity1 = document.getElementById("opacity1");
shouye2.onmouseover = function(){
  opacity1.style.display = "block";
  goumai1_div.style.display = "block";
}
opacity1.onmouseout = function(){
  opacity1.style.display = "none";
  goumai1_div.style.display = "none";
}
var goumai2_div = document.getElementById("goumai2_div");
goumai2_div.onclick = function(){
  goumai2_div.style.backgroundColor = "orange";
}
goumai2_div.onmouseover = function(){
  goumai2_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai2_div.onmouseout = function(){
  goumai2_div.style.backgroundColor = "transparent";
}
var shouye3 = document.getElementById("shouye3");
var opacity2 = document.getElementById("opacity2");
shouye3.onmouseover = function(){
  opacity2.style.display = "block";
  goumai2_div.style.display = "block";
}
opacity2.onmouseout = function(){
  opacity2.style.display = "none";
  goumai2_div.style.display = "none";
}
var goumai3_div = document.getElementById("goumai3_div");
goumai3_div.onclick = function(){
  goumai3_div.style.backgroundColor = "orange";
}
goumai3_div.onmouseover = function(){
  goumai3_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai3_div.onmouseout = function(){
  goumai3_div.style.backgroundColor = "transparent";
}
var shouye4 = document.getElementById("shouye4");
var opacity3 = document.getElementById("opacity3");
shouye4.onmouseover = function(){
  opacity3.style.display = "block";
  goumai3_div.style.display = "block";
}
opacity3.onmouseout = function(){
  opacity3.style.display = "none";
  goumai3_div.style.display = "none";
}
var goumai4_div = document.getElementById("goumai4_div");
goumai4_div.onclick = function(){
  goumai4_div.style.backgroundColor = "orange";
}
goumai4_div.onmouseover = function(){
  goumai4_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai4_div.onmouseout = function(){
  goumai4_div.style.backgroundColor = "transparent";
}
var shouye5 = document.getElementById("shouye5");
var opacity4 = document.getElementById("opacity4");
shouye5.onmouseover = function(){
  opacity4.style.display = "block";
  goumai4_div.style.display = "block";
}
opacity4.onmouseout = function(){
  opacity4.style.display = "none";
  goumai4_div.style.display = "none";
}
var goumai5_div = document.getElementById("goumai5_div");
goumai5_div.onclick = function(){
  goumai5_div.style.backgroundColor = "orange";
}
goumai5_div.onmouseover = function(){
  goumai5_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai5_div.onmouseout = function(){
  goumai5_div.style.backgroundColor = "transparent";
}
var shouye6 = document.getElementById("shouye6");
var opacity5 = document.getElementById("opacity5");
shouye6.onmouseover = function(){
  opacity5.style.display = "block";
  goumai5_div.style.display = "block";
}
opacity5.onmouseout = function(){
  opacity5.style.display = "none";
  goumai5_div.style.display = "none";
}
var goumai6_div = document.getElementById("goumai6_div");
goumai6_div.onclick = function(){
  goumai6_div.style.backgroundColor = "orange";
}
goumai6_div.onmouseover = function(){
  goumai6_div.style.backgroundColor = "rgb(0,170,232)";
}
goumai6_div.onmouseout = function(){
  goumai6_div.style.backgroundColor = "transparent";
}
var shouye7 = document.getElementById("shouye7");
var opacity6 = document.getElementById("opacity6");
shouye7.onmouseover = function(){
  opacity6.style.display = "block";
  goumai6_div.style.display = "block";
}
opacity6.onmouseout = function(){
  opacity6.style.display = "none";
  goumai6_div.style.display = "none";
}

/*图片自动切换*/
//图片
//轮换图片数组
var lunBoQi = document.getElementById('tuPian');
var tuArr = ["../images/shouye/shouye1.png","../images/shouye/shouye1.png","../images/shouye/shouye1.png","../images/shouye/shouye1.png","../images/shouye/shouye1.png"];
var lanDian = document.getElementsByClassName("myDiv");
var num = 0;
var timer = null;
startMove = function () {
  timer = window.setInterval(function () {
    lunBoQi.src = tuArr[num%tuArr.length];
    for(var j=0;j<lanDian.length;j++){
      lanDian[j].style.background = "#fff";
    }
    lanDian[num%tuArr.length].style.background = "#21749e";
    num++;
  },1000)
}
startMove();
lunBoQi.onmouseover = function () {
  window.clearInterval(timer);
}
lunBoQi.onmouseout = function () {
  startMove();
}
for(var i = 0; i<lanDian.length;i++){
  (function (i) {
    lanDian[i].onmouseover = function () {
      window.clearInterval(timer);
      for(var j=0;j<lanDian.length;j++){
        lanDian[j].style.background = "#fff";
      }
      lanDian[i].style.background = "#21749e";
      lunBoQi.src = tuArr[i];
      num = i;
    }
  }(i))
}
