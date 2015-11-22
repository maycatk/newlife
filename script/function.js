/*通用模块*/
function $(id) {
    return document.getElementById(id);
}

/*小广告模块*/
var closebox = $('notice-box');
var closebtn = $('close-btn');
closebtn.onclick=function(){
    hidden();
}
function hidden(){ 
 closebox.parentNode.removeChild(closebox);
}
/*设置第一次cookie*/
var scookie=document.cookie.indexOf('firstVisit=');
if (scookie==-1){
    document.cookie="firstVisit=1";
    window.location.href='test.html';
    /*var exdate=new Date();
    exdate.setDate(exdate.getDate()+30);
    document.cookie="firstVisit=1;expires="+exdate.toGMTString();
    window.location.href='test.html';*/
}









