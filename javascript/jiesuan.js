/**
 * Created by Administrator on 2016/11/8.
 */
/*head begin*/
var headimg1 = document.getElementById("headimg1");
var headimg2 = document.getElementById("headimg2");
var headimg3 = document.getElementById("headimg3");
headimg1.onmouseover = function(){
  headimg1.src = "../images/1.png";
}
headimg1.onmouseout = function(){
  headimg1.src = "../images/headimg1.png";
}
headimg2.onmouseover = function(){
  headimg2.src = "../images/2.png";
}
headimg2.onmouseout = function(){
  headimg2.src = "../images/headimg2.png";
}
headimg3.onmouseover = function(){
  headimg3.src = "../images/3.png";
}
headimg3.onmouseout = function(){
  headimg3.src = "../images/headimg3.png";
}
var jiantouimg = document.getElementById("jiantouimg");
var guoqi = document.getElementById("guoqi");
jiantouimg.onmouseover = function(){
  guoqi.style.display = "block";
}
jiantouimg.onmouseout = function(){
  guoqi.style.display = "none";
}
/*head end*/