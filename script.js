// 定义获取年份生肖函数
function getAnimal(year){
    if(year<0){
        alert("当前年份有误");
        return false;
    } 
    var animals=["猴","鸡","狗","猪","鼠","牛","虎","兔","龙","蛇","马","羊"];
    var index=year%12;
    return animals[index];
}
// 定义获取当前年份函数
var thisYear;
function getThisYear(){
    $.ajax(
        {url:"https://quan.suning.com/getSysTime.do",async:false,success:function(result){
            thisYear=result;
        }}
    )
    // thisYear=thisYear.split("-")[0];
    return JSON.parse(thisYear).sysTime2.split("-")[0]; 
}
// 根据十二生肖年定位图片
function getImage(animal){
    var item={"猴":"100% 66.6%","鸡":"0% 99.9%","狗":"50% 99.9%","猪":"100% 99.9%","鼠":"0% 0%","牛":"50% 0%","虎":"100% 0","兔":"0% 33.3%","龙":"50% 33.3%","蛇":"100% 33.3%","马":"0% 66.6%","羊":"50% 66.6%"};
    return (item[animal]?item[animal]:"");
}
// 设置图片位置
function setPosition(){
    var position=getImage(getAnimal(getThisYear()));
    var cardSeal=document.getElementsByClassName("card-seal");
    cardSeal[0].style.backgroundPosition=position;
}
setPosition();
