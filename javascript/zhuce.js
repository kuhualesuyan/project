/**
 * Created by Administrator on 2016/11/7.
 */
var zc_span = document.getElementById("zc_span");
var zc_div = document.getElementById("zc_div");
var z_div = document.getElementById("z_div");
var zc_Dianji = document.getElementById("zc_Dianji");
zc_span.onclick = function(){
  zc_div.style.display = "block";
  z_div.style.display = "block";
}
zc_Dianji.onclick = function(){
  zc_div.style.display = "none";
  z_div.style.display = "none";
}
