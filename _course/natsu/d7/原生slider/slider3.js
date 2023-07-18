$(function(){
    oul  =$('.wrap ul');
    oli = $('.wrap ul li');
    oNum = $('.wrap ol li');
    aLiWidth = oli.eq(0).width();
    _now = 0;
    _imgNow =0;
    var timid = null;

    oNum.click(function(){
       _now = $(this).index();
       _imgNow=_now;
       clearInterval(timid);
       oul.animate({'left':-aLiWidth*_imgNow},300);
       oAlt=oli.eq(_imgNow).find('img').attr('alt');
      $('.introduce').html(oAlt);
       $(this).addClass('current').siblings().removeClass('current');
    })

    function slider(){
       if(_now == oli.size()-1){
           last = oli.eq(0).clone();
           last.appendTo(oul);
           _now=0;
       }else{
           _now++;
       }
       _imgNow++;

      oNum.eq(_now).addClass('current').siblings().removeClass('current');
      oAlt=oli.eq(_imgNow).find('img').attr('alt');
      //console.log(oAlt);
      $('.introduce').html(oAlt);
      oul.animate({'left':-aLiWidth*_imgNow},300,function(){
           if(_now==0){
               last.remove();
               oul.css('left','0px');
               _imgNow=0;
           }
      })
   }

   timid = setInterval(slider,1500)

   oul.mouseover(function(){
       clearInterval(timid);
   }).mouseout(function(){
        timid = setInterval(slider,1500)
       })




})


