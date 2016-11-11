/**
 * Created by Administrator on 2016/11/8.
 */
/*head begin*/
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
/*head end*/
var sc_btn = document.getElementById("sc_btn");
var JTmsg_div = document.getElementById("JTmsg_div");
var sl_span = document.getElementById("sl_span");
var dd_span = document.getElementById("dd_span");
var ddzj_span = document.getElementById("ddzj_span");
sc_btn.onclick = function(){
  JTmsg_div.style.display = "none";
  sl_span.innerHTML = 0;
  dd_span.innerHTML = 0;
  ddzj_span.innerHTML = 0;
}