


 var oWrap =document.getElementById('wrap');
 var oUl = oWrap.getElementsByTagName('ul')[0];
 var oLi = oUl.getElementsByTagName('li');
 var aLiWidth = oLi[0].offsetWidth;
 var oIntroduce = document.getElementById('introduce')
 //alert(aLiWidth)
 var oNum = oWrap.getElementsByTagName('ol')[0].getElementsByTagName('li');
 var _now = 0;
 var _imgNow = 0;
 var timid = null;


function clone(oldEl){
    //parent = oldEl.parentNode;
    oClone = oLi[0].cloneNode(true);
    oUl.appendChild(oClone);
    oUl.style.width = aLiWidth*(oLi.length+1);
}



function  doMove(obj,attr,dir,target,endFn){
         dir = parseInt(getStyle(obj,attr))<target? dir:-dir; // 速度,控制方向
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



 for(var i=0;i<oNum.length;i++){
     oNum[i].index = i;

     oNum[i].onclick = function(){
         clearInterval(timid);
         _imgNow = _now = this.index
         doMove(oUl,'left',10,-aLiWidth*_imgNow)
         getText();
     }
 }
 

function slider2(){

    if(_now==oLi.length-1){
       clone(oLi[0]);
       _now = 0;
    }else{
        _now++;
    }
    _imgNow++;

     // oAlt=oli.eq(_imgNow).find('img').attr('alt');
     // $('.introduce').html(oAlt);

     getText();
     doMove(oUl,'left',10,-aLiWidth*_imgNow,function(){
         if(_now==0){
           oUl.style.left=0;
            oUl.removeChild(oUl.lastElementChild);
             //console.log(oUl);

            _imgNow=0;
        }
     })
     console.log("now:" + _now);
    console.log("img:" + _imgNow);

}

 function getText(){
     for(var i=0;i<oNum.length;i++){
        oNum[i].className="";
    }
    oNum[_now].className='current';
    oAlt = oLi[_now].getElementsByTagName('img')[0].alt;
    oIntroduce.innerHTML = oAlt;
 }

  timid = setInterval(slider2,1500);

  oUl.onmouseover = function(){
     clearInterval(timid);
  }
  oUl.onmouseout = function(){
     timid = setInterval(slider2,1500)
   }
