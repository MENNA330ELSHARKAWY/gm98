let moon =document.getElementById ('moon');
let mountain3 =document.getElementById ('mountain3');
let mountain4 =document.getElementById ('mountain4');
let river5 =document.getElementById ('river');
let boat6 =document.getElementById ('boat');
let GM=Document.queryselector('#GM');
window.onscroll=function(){
    let value=scrolly;}
    stars.style.left=value+'px';
    moon.style.top=value * 3 +'px';
    mountain3.style.top=value*1.5+'px';
    mountain4.style.top=value*1.2+'px';
    river.style.top=value+'px';
   boat6.style.top=value + 'px';
   boat6.style.left=value*1.5+'px';
   GM.style.fontsize=value + 'px';
   if( scrolly>=67)
{
    GM.style.fontsize=67 + 'px';
}


