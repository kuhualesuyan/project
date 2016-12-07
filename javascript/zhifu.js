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
var zfb_div = document.getElementById("zfb_div");
zfb_div.onmousemove = function(){
  zfb_div.style.border = "1px solid rgb(0,255,0)";
}
zfb_div.onmouseout = function(){
  zfb_div.style.border = "1px solid rgb(224,224,224)";
}
var weixinzhifu_div = document.getElementById("weixinzf_div");
weixinzhifu_div.onmousemove = function(){
  weixinzhifu_div.style.border = "1px solid rgb(0,255,0)";
}
weixinzhifu_div.onmouseout = function(){
  weixinzhifu_div.style.border = "1px solid rgb(224,224,224)";
}
var zaixianzf_div = document.getElementById("zaixianzf_div");
zaixianzf_div.onmousemove = function(){
  zaixianzf_div.style.border = "1px solid rgb(0,255,0)";
}
zaixianzf_div.onmouseout = function(){
  zaixianzf_div.style.border = "1px solid rgb(224,224,224)";
}
var gs = document.getElementById("gs");
gs.onmousemove = function(){
  gs.style.border = "1px solid rgb(0,255,0)";
}
gs.onmouseout = function(){
  gs.style.border = "1px solid rgb(224,224,224)";
}
var ny = document.getElementById("ny");
ny.onmousemove = function(){
  ny.style.border = "1px solid rgb(0,255,0)";
}
ny.onmouseout = function(){
  ny.style.border = "1px solid rgb(224,224,224)";
}
var zy = document.getElementById("zy");
zy.onmousemove = function(){
  zy.style.border = "1px solid rgb(0,255,0)";
}
zy.onmouseout = function(){
  zy.style.border = "1px solid rgb(224,224,224)";
}
var jh = document.getElementById("jh");
jh.onmousemove = function(){
  jh.style.border = "1px solid rgb(0,255,0)";
}
jh.onmouseout = function(){
  jh.style.border = "1px solid rgb(224,224,224)";
}
var zh = document.getElementById("zh");
zh.onmousemove = function(){
  zh.style.border = "1px solid rgb(0,255,0)";
}
zh.onmouseout = function(){
  zh.style.border = "1px solid rgb(224,224,224)";
}
var gd = document.getElementById("gd");
gd.onmousemove = function(){
  gd.style.border = "1px solid rgb(0,255,0)";
}
gd.onmouseout = function(){
  gd.style.border = "1px solid rgb(224,224,224)";
}
var pa = document.getElementById("pa");
pa.onmousemove = function(){
  pa.style.border = "1px solid rgb(0,255,0)";
}
pa.onmouseout = function(){
  pa.style.border = "1px solid rgb(224,224,224)";
}
var zx = document.getElementById("zx");
zx.onmousemove = function(){
  zx.style.border = "1px solid rgb(0,255,0)";
}
zx.onmouseout = function(){
  zx.style.border = "1px solid rgb(224,224,224)";
}

//选择国旗
var gq_li = document.getElementsByClassName("gq_li");
var jt = document.getElementById("jt");
var jiantouimg = document.getElementById("china1");
for(var i = 0;i<gq_li.length;i++){
  (function(i){
    gq_li[i].onclick = function(){
      jiantouimg.src = gq_li[i].src;
    }
  }(i))
}