/**
 * Created by Administrator on 2016/11/7.
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

