$(function(){
	var oul = $('.wrap ul');
	var ali = $('.wrap ul li');
	var numLi = $('.wrap ol li');
	var aliWidth = $('.wrap ul li').eq(0).width();
	var _now = 0;	//这个是控制数字样式的计数器
	var _now2 = 0;	//这个是控制图片运动距离的计数器
	var timeId;
	var aimg = $('.wrap ul img');
	var op = $('.wrap p');

	numLi.click(function(){
		var index = $(this).index();
		_now = index;
		_now2=index;
		var imgAlt = aimg.eq(_now).attr('alt');
		op.html(imgAlt);
		$(this).addClass('current').siblings().removeClass();
		oul.animate({'left':-aliWidth*index},500);
	});

	/**
	 * [原生slider description] 图片运动的函数
	 * @return {[type]} [description] 无返回值
	 */
	function slider(){
		if(_now==numLi.size()-1){
            //oul.css('left',0);
            last = ali.eq(0).clone(true);
            last.appendTo(oul);
            //last.css('left',oul.width())
            _now=0;
		}else{
			_now++;
		}

		_now2++;

		numLi.eq(_now).addClass('current').siblings().removeClass();

		var imgAlt = aimg.eq(_now).attr('alt');
		op.html(imgAlt);

		oul.animate({'left':-aliWidth*_now2},500,function(){
			if(_now==0){
				//ali.eq(0).css('position','static');
				oul.css('left',0);
				_now2=0;
                last.remove();
			}
		});


	}

	timeId = setInterval(slider,1500);

	/*$('.wrap').mouseover(function(){
		clearInterval(timeId);
	});

	$('.wrap').mouseout(function(){
		timeId = setInterval(原生slider,1500);
	});*/

	$('.wrap').hover(function(){
		clearInterval(timeId);
	},function(){
		timeId = setInterval(slider,1500);
	});
});
