
window.onload=function(){hz.ui.textChange()
    hz.ui.fadeIn()}
    var hz={};hz.tools={};hz.tools.getByClass=function(oParent,sClass){var aEle=oParent.getElementsByTagName('*');var arr=[];for(var i=0;i<aEle.length;i++){if(aEle[i].className==sClass){arr.push(aEle[i]);}}
    return arr;};hz.tools.getStyle=function(obj,attr){if(obj.currentStyle){return obj.currentStyle[attr];}
    else{return getComputedStyle(obj,false)[attr];}};hz.ui={};hz.ui.textChange=function(obj,str){obj.onfocus=function(){if(this.value==str){this.value='';}};obj.onblur=function(){if(this.value==''){this.value=str;}};};hz.ui.fadeIn=function(obj){var iCur=hz.tools.getStyle(obj,'opacity');if(iCur==1){return false;}
    var value=0;clearInterval(obj.timer);obj.timer=setInterval(function(){var iSpeed=5;if(value==100){clearInterval(obj.timer);}
    else{value+=iSpeed;obj.style.opacity=value/100;}},30);};hz.ui.fadeOut=function(obj){var iCur=hz.tools.getStyle(obj,'opacity');if(iCur==0){return false;}
    var value=100;clearInterval(obj.timer);obj.timer=setInterval(function(){var iSpeed=-5;if(value==0){clearInterval(obj.timer);}
    else{value+=iSpeed;obj.style.opacity=value/100;obj.style.filter='alpha(opacity='+value+')';}},30);};hz.ui.moveLeft=function(obj,old,now){clearInterval(obj.timer);obj.timer=setInterval(function(){var iSpeed=(now-old)/10;iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);if(now==old){clearInterval(obj.timer);}
    else{old+=iSpeed;obj.style.left=old+'px';}},30);};hz.ui.moveNum=function(obj,old,index,wid){clearInterval(obj.timer);obj.timer=setInterval(function(){now=index*wid
    var iSpeed=(now-old)/10;iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);if(now==old){clearInterval(obj.timer);}
    else{old+=iSpeed;obj.style.left=old+'px';}},30);};hz.app={};hz.app.toTip=function(){var oText1=document.getElementById('text1');var oText2=document.getElementById('text2');hz.ui.textChange(oText1,'Search website');hz.ui.textChange(oText2,'Search website');};hz.app.toBanner=function(){var oDd=document.getElementById('ad');var aLi=oDd.getElementsByTagName('li');var oPrevBg=hz.tools.getByClass(oDd,'prev_bg')[0];var oNextBg=hz.tools.getByClass(oDd,'next_bg')[0];var oPrev=hz.tools.getByClass(oDd,'prev')[0];var oNext=hz.tools.getByClass(oDd,'next')[0];var iNow=0;var timer=setInterval(auto,3000);function auto(){if(iNow==aLi.length-1){iNow=0;}
    else{iNow++;}
    for(var i=0;i<aLi.length;i++){hz.ui.fadeOut(aLi[i]);}
    hz.ui.fadeIn(aLi[iNow]);}
    function autoPrev(){if(iNow==0){iNow=aLi.length-1;}
    else{iNow--;}
    for(var i=0;i<aLi.length;i++){hz.ui.fadeOut(aLi[i]);}
    hz.ui.fadeIn(aLi[iNow]);}
    oPrevBg.onmouseover=oPrev.onmouseover=function(){oPrev.style.display='block';clearInterval(timer);};oNextBg.onmouseover=oNext.onmouseover=function(){oNext.style.display='block';clearInterval(timer);};oPrevBg.onmouseout=oPrev.onmouseout=function(){oPrev.style.display='none';timer=setInterval(auto,3000);};oNextBg.onmouseout=oNext.onmouseout=function(){oNext.style.display='none';timer=setInterval(auto,3000);};oPrev.onclick=function(){autoPrev();};oNext.onclick=function(){auto();};};hz.app.toSel=function(){var oSel=document.getElementById('sel1');var aDd=oSel.getElementsByTagName('dd');var aUl=oSel.getElementsByTagName('ul');var aH2=oSel.getElementsByTagName('h2');for(var i=0;i<aDd.length;i++){aDd[i].index=i;aDd[i].onclick=function(ev){var ev=ev||window.event;var This=this;for(var i=0;i<aUl.length;i++){aUl[i].style.display='none';}
    aUl[this.index].style.display='block';document.onclick=function(){aUl[This.index].style.display='none';};ev.cancelBubble=true;};}
    for(var i=0;i<aUl.length;i++){aUl[i].index=i;(function(ul){var aLi=ul.getElementsByTagName('li');for(var i=0;i<aLi.length;i++){aLi[i].onmouseover=function(){this.className='active';};aLi[i].onmouseout=function(){this.className='';};aLi[i].onclick=function(ev){var ev=ev||window.event;aH2[this.parentNode.index].innerHTML=this.innerHTML;ev.cancelBubble=true;this.parentNode.style.display='none';};}})(aUl[i]);}};hz.app.toRun=function(){var oRun=document.getElementById('run1');var oUl=oRun.getElementsByTagName('ul')[0];var aLi=oUl.getElementsByTagName('li');var oPrev=hz.tools.getByClass(oRun,'prev')[0];var oNext=hz.tools.getByClass(oRun,'next')[0];var oBtn=document.getElementById('btn')
    var oNum=oBtn.getElementsByTagName('span');var iNow=0;oUl.innerHTML+=oUl.innerHTML;oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';oPrev.onclick=function(){if(iNow==0){iNow=aLi.length/2;oUl.style.left=-oUl.offsetWidth/2+'px';}
    hz.ui.moveLeft(oUl,-iNow*aLi[0].offsetWidth,-(iNow-1)*aLi[0].offsetWidth);iNow--;};oNext.onclick=function(){if(iNow==aLi.length/2){iNow=0;oUl.style.left=0;}
    hz.ui.moveLeft(oUl,-iNow*aLi[0].offsetWidth,-(iNow+1)*aLi[0].offsetWidth);iNow++;};for(var i=0;i<oNum.length;i++){oNum[i].index=i
    oNum[i].onclick=function(){hz.ui.moveLeft(oUl,-iNow*aLi[0].offsetWidth,-(iNow-this.index)*aLi[0].offsetWidth);}}};
