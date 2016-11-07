/**
 * Created by Administrator on 2016/11/7.
 */
var dl_div  = document.getElementById("dl_div");
var z_div = document.getElementById("z_div");
var dl_Dianji = document.getElementById("dl_Dianji");
var dl_span = document.getElementById("dl_span");
dl_span.onclick = function(){
  dl_div.style.display = "block";
  z_div.style.display = "block";
}
dl_Dianji.onclick = function(){
  dl_div.style.display = "none";
  z_div.style.display = "none";
}