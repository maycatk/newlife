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
/*设置cookie*/



















