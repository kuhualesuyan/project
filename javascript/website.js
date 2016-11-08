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
  goumai_div.style.backgroundColor = "rgb(0,170,232)";
}
var goumai1_div = document.getElementById("goumai1_div");
goumai1_div.onclick = function(){
  goumai1_div.style.backgroundColor = "rgb(0,170,232)";
}
var shouye2 = document.getElementById("shouye2");
var opacity1 = document.getElementById("opacity1");
shouye2.onmouseover = function(){
  opacity1.style.display = "block";
}
shouye2.onmouseout = function(){
  opacity1.style.display = "none";
}
var goumai2_div = document.getElementById("goumai2_div");
goumai2_div.onclick = function(){
  goumai2_div.style.backgroundColor = "rgb(0,170,232)";
}
var shouye3 = document.getElementById("shouye3");
var opacity2 = document.getElementById("opacity2");
shouye3.onmouseover = function(){
  opacity2.style.display = "block";
}
shouye3.onmouseout = function(){
  opacity2.style.display = "none";
}
var goumai3_div = document.getElementById("goumai3_div");
goumai3_div.onclick = function(){
  goumai3_div.style.backgroundColor = "rgb(0,170,232)";
}
var shouye4 = document.getElementById("shouye4");
var opacity3 = document.getElementById("opacity3");
shouye4.onmouseover = function(){
  opacity3.style.display = "block";
}
shouye4.onmouseout = function(){
  opacity3.style.display = "none";
}
var goumai4_div = document.getElementById("goumai4_div");
goumai4_div.onclick = function(){
  goumai4_div.style.backgroundColor = "rgb(0,170,232)";
}
var shouye5 = document.getElementById("shouye5");
var opacity4 = document.getElementById("opacity4");
shouye5.onmouseover = function(){
  opacity4.style.display = "block";
}
shouye5.onmouseout = function(){
  opacity4.style.display = "none";
}
var goumai5_div = document.getElementById("goumai5_div");
goumai5_div.onclick = function(){
  goumai5_div.style.backgroundColor = "rgb(0,170,232)";
}
var shouye6 = document.getElementById("shouye6");
var opacity5 = document.getElementById("opacity5");
shouye6.onmouseover = function(){
  opacity5.style.display = "block";
}
shouye6.onmouseout = function(){
  opacity5.style.display = "none";
}
var goumai6_div = document.getElementById("goumai6_div");
goumai6_div.onclick = function(){
  goumai6_div.style.backgroundColor = "rgb(0,170,232)";
}
var shouye7 = document.getElementById("shouye7");
var opacity6 = document.getElementById("opacity6");
shouye7.onmouseover = function(){
  opacity6.style.display = "block";
}
shouye7.onmouseout = function(){
  opacity6.style.display = "none";
}

var ziDong;
var  sj= 0;
var tu = document.getElementById("tuPian");
var mdiv = document.getElementById("mdiv");
var sd = document.getElementsByClassName("myDiv");
var arr = ["../images/shouye/shouye1.png","../images/shouye/shouye1.png","../images/shouye/shouye1.png","../images/shouye/shouye1.png","../images/shouye/shouye1.png"];
sd[0].onmouseover = function(){
  tu.src = arr[0];
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 16px';
  }
  sd[0].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
sd[1].onmouseover = function(){
  tu.src = arr[1];
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[1].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
sd[2].onmouseover = function(){
  tu.src = arr[2];
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[2].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
sd[3].onmouseover = function(){
  tu.src = arr[3];
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[3].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
sd[4].onmouseover = function(){
  tu.src = arr[4];0
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[4].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
for(var i = 0;i<sd.length;i++){
  window.clearInterval(ziDong);
}
function qieHuan() {
  tu.src = arr[sj];
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[(sj+5)%5].style.backgroundPosition = '0px 16px';
  sj = (sj+1)%5;
}
window.onload = function(){
  ziDong = window.setInterval('qieHuan()', 1200)
}
tu.onmouseover = function(){
  window.clearInterval(ziDong);
}
tu.onmouseout = function(){
  ziDong = window.setInterval('qieHuan()', 1200)
}