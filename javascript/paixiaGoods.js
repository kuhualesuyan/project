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