
// 找对象


 var oWrap =document.getElementById('wrap');
 var oUl = oWrap.getElementsByTagName('ul')[0];
 var oLi = oUl.getElementsByTagName('li');
 var aLiWidth = oLi[0].offsetWidth;
 //alert(aLiWidth)
 var oNum = oWrap.getElementsByTagName('ol')[0].getElementsByTagName('li');
 var _now = 0;
 var _imgNow = 0;
 var timid = null;

// clone节点

function clone(oldEl){
    //parent = oldEl.parentNode;
    oClone = oLi[0].cloneNode(true); // 使用内置的 cloneNode
    oUl.appendChild(oClone);
    oUl.style.width = aLiWidth*(oLi.length+1);
}

// 创建移动,并创建回调函数

function  doMove(obj,attr,dir,target,endFn){
         dir = parseInt(getStyle(obj,attr))<target? dir:-dir; // 控制方向
         clearInterval(obj.timerid);
         obj.timerid=setInterval(function(){

             var pos = parseInt(getStyle(obj,attr)) + dir;  // 每次运动多少


              if(pos > target && dir >0) { // 向左运动
                   pos= target;
              }
              if(pos < target && dir <0){ // 向右运动
                 pos = target;
              }

              obj.style[attr] = pos + 'px';
              if(pos==target){ // 到到目标后，执行回调函数的条件

                  clearInterval(obj.timerid);
                  endFn&&endFn();
              }

         },10)
    
}

// 使用滚动
function slider2(){

    if(_now==oLi.length-1){
       clone(oLi[0]);
       _now = 0;
    }else{
        _now++;
    }
    _imgNow++;

     doMove(oUl,'left',10,-aLiWidth*_imgNow,function(){
         if(_now==0){
            oUl.removeChild(oUl.lastElementChild);
            oUl.style.left=0;
            _imgNow=0;
        }
     })
    console.log("now:" + _now);
    console.log("img:" + _imgNow);

}

timid = setInterval(slider2,1500)
