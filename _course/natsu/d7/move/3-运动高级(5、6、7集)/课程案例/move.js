/*
 * @Description: 
 * @Author: front end cabbage
 * @Date: 2023-07-10 20:50:21
 * @LastEditTime: 2023-07-11 13:51:17
 * @LastEditors: front end cabbage
 * @FilePath: \web2023\day14\move\3-运动高级(5、6、7集)\课程案例\move.js
 */
/**
 * @author 
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

function startMove(obj, attr, iTarget)
{
	// clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var iCur=0;
		if(attr=='opacity')
		{
			iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			iCur=parseInt(getStyle(obj, attr));
		}
		
		var iSpeed=(iTarget-iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
		if(iCur==iTarget)
		{
			clearInterval(obj.timer);
		}
		else
		{
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
	}, 30)
}