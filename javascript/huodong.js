/**
 * Created by Administrator on 2016/11/8.
 */
var ziDong;
var  sj= 0;
var tu = document.getElementById("tuPian");
var mdiv = document.getElementById("mdiv");
var sd = document.getElementsByClassName("myDiv");
var arr = ["../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png","../images/huodong/活动页1.png"];
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
sd[5].onmouseover = function(){
  tu.src = arr[5];0
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[5].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
for(var i = 0;i<sd.length;i++){
  window.clearInterval(ziDong);
}
sd[6].onmouseover = function(){
  tu.src = arr[6];0
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[6].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
for(var i = 0;i<sd.length;i++){
  window.clearInterval(ziDong);
}
sd[7].onmouseover = function(){
  tu.src = arr[7];0
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[7].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
for(var i = 0;i<sd.length;i++){
  window.clearInterval(ziDong);
}
sd[8].onmouseover = function(){
  tu.src = arr[8];0
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[8].style.backgroundPosition = '0px 16px';
  window.clearInterval(ziDong);
}
for(var i = 0;i<sd.length;i++){
  window.clearInterval(ziDong);
}
sd[9].onmouseover = function(){
  tu.src = arr[9];0
  for(var j = 0;j<sd.length;j++){
    sd[j].style.backgroundPosition = '16px 15px';
  }
  sd[9].style.backgroundPosition = '0px 16px';
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
  sd[(sj+10)%10].style.backgroundPosition = '0px 16px';
  sj = (sj+1)%10;
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
