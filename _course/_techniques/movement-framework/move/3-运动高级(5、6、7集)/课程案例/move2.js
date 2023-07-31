/*
 * @Description: 
 * @Author: front end cabbage
 * @Date: 2023-07-10 20:50:21
 * @LastEditTime: 2023-07-11 14:29:52
 * @LastEditors: front end cabbage
 * @FilePath: \web2023\day14\move\3-运动高级(5、6、7集)\课程案例\move2.js
 */

function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)   
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设
		for(var attr in json)
		{
			//1.取当前值
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.其中一个属性值没有到达目标，就不能停止，定时器还要继续工作
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}
