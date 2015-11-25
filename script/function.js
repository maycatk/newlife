/*通用模块*/
function $(id) {
    return document.getElementById(id);
}
/*设置第一次cookie*/
/*var scookie=document.cookie.indexOf('firstVisit=');
if (scookie==-1){
    var exdate=new Date();//设置过期cookie
    exdate.setDate(exdate.getDate()+30); document.cookie="firstVisit=1;expires="+exdate.toGMTString();
    window.location.href='test.html';
}*/
/*分割线*/
/*设置cookie*/
function setCookie(name,value,day){
    var aDate=new Date();
    aDate.setDate(aDate.getDate()+day);
    document.cookie=name+'='+value+';expires='+aDate;
}
/*读取cookie*/
function getCookie(name){
    var arr = document.cookie.split(';');//定义一个数组
    var re = new RegExp('\\b'+name+'=\\w+');//定义一个正则
    var res = document.cookie.match(re);//匹配所选字段
    if(res){
        return res[0].split('=')[1];//如果匹配成功,返回结果
    }
    else{
        return '';//否则返回空
    }
}
//删除cookie
function removeCookie(name){
    setCookie(name,'1',-1)
}//利用setCookie函数，将时间设置为-1，达到删除效果（默认没有删除方法）

/*小广告模块*/
var closebox = $('notice-box');
var closebtn = $('close-btn');
var io=document.cookie.indexOf('first=');
setCookie('first','1',30);//添加cookie
closebtn.onclick=function(){
    if(io==-1){
    
    var io = getCookie('first');
    alert(io);
    function hidden(){ 
        closebox.parentNode.removeChild(closebox);
    }  
}
    hidden();
    
}

 
  


