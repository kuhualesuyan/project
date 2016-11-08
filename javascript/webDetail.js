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

var dis_div = document.getElementById("dis_div");
var shoesimg = document.getElementById("shoesimg");
var dis1_div = document.getElementById("dis1_div");
var shoes1img = document.getElementById("shoes1img");
var dis2_div = document.getElementById("dis2_div");
var shoes2img = document.getElementById("shoes2img");
var dis3_div = document.getElementById("dis3_div");
var shoes3img = document.getElementById("shoes3img");
var dis4_div = document.getElementById("dis4_div");
var shoes4img = document.getElementById("shoes4img");
var dis5_div = document.getElementById("dis5_div");
var shoes5img = document.getElementById("shoes5img");
var shoes6img = document.getElementById("shoes6img");
shoesimg.onmouseover = function(){
  dis_div.style.border = "1px solid rgb(0,170,232)";
  shoes6img.src = "../images/shoes/desShoes.jpg";
}
shoesimg.onmouseout = function(){
  dis_div.style.border = "1px solid rgb(223,227,229)";
}
shoes1img.onmouseover = function(){
  dis1_div.style.border = "1px solid rgb(0,170,232)";
  shoes6img.src = "../images/shoes/desShoes1.jpg";
}
shoes1img.onmouseout = function(){
  dis1_div.style.border = "1px solid rgb(223,227,229)";
}
shoes2img.onmouseover = function(){
  dis2_div.style.border = "1px solid rgb(0,170,232)";
  shoes6img.src = "../images/shoes/desShoes2.jpg";
}
shoes2img.onmouseout = function(){
  dis2_div.style.border = "1px solid rgb(223,227,229)";
}
shoes3img.onmouseover = function(){
  dis3_div.style.border = "1px solid rgb(0,170,232)";
  shoes6img.src = "../images/shoes/desShoes3.jpg";
}
shoes3img.onmouseout = function(){
  dis3_div.style.border = "1px solid rgb(223,227,229)";
}
shoes4img.onmouseover = function(){
  dis4_div.style.border = "1px solid rgb(0,170,232)";
  shoes6img.src = "../images/shoes/desShoes4.jpg";
}
shoes4img.onmouseout = function(){
  dis4_div.style.border = "1px solid rgb(223,227,229)";
}
shoes5img.onmouseover = function(){
  dis5_div.style.border = "1px solid rgb(0,170,232)";
  shoes6img.src = "../images/shoes/desShoes5.jpg";
}
shoes5img.onmouseout = function(){
  dis5_div.style.border = "1px solid rgb(223,227,229)";
}
var xianshi_shoe1 = document.getElementById("xianshi_shoes1");
var xianshi_shoe2 = document.getElementById("xianshi_shoes2");
xianshi_shoe1.onmouseover = function(){
  xianshi_shoe1.style.border = "1px solid rgb(0,170,232)";
}
xianshi_shoe1.onmouseout = function(){
  xianshi_shoe1.style.border = "1px solid rgb(223,227,229)";
}
xianshi_shoe2.onmouseover = function(){
  xianshi_shoe2.style.border = "1px solid rgb(0,170,232)";
}
xianshi_shoe2.onmouseout = function(){
  xianshi_shoe2.style.border = "1px solid rgb(223,227,229)";
}
var qiuxie1 = document.getElementById("qiuxie1_div");
var qiuxie2 = document.getElementById("qiuxie2_div");
var qiuxie3 = document.getElementById("qiuxie3_div");
var qiuxie4 = document.getElementById("qiuxie4_div");
qiuxie1.onmouseover = function(){
  qiuxie1.style.border = "1px solid rgb(0,170,232)";
}
qiuxie1.onmouseout = function(){
  qiuxie1.style.border = "1px solid rgb(223,227,229)";
}
qiuxie2.onmouseover = function(){
  qiuxie2.style.border = "1px solid rgb(0,170,232)";
}
qiuxie2.onmouseout = function(){
  qiuxie2.style.border = "1px solid rgb(223,227,229)";
}
qiuxie3.onmouseover = function(){
  qiuxie3.style.border = "1px solid rgb(0,170,232)";
}
qiuxie3.onmouseout = function(){
  qiuxie3.style.border = "1px solid rgb(223,227,229)";
}
qiuxie4.onmouseover = function(){
  qiuxie4.style.border = "1px solid rgb(0,170,232)";
}
qiuxie4.onmouseout = function(){
  qiuxie4.style.border = "1px solid rgb(223,227,229)";
}
var dingimg = document.getElementById("dingImg");
var dingAmount = document.getElementById("dingAmount");
dingimg.onclick = function(){
  dingAmount += 1;
}