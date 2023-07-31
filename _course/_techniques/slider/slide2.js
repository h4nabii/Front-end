/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 17-5-3
 * Time: 下午7:50
 * To change this template use File | Settings | File Templates.
 */

  ;(function($){

    oul = $('.wrap ul');
    
    oul.html( oul.html()+oul.html() )
    aLi = $('.wrap ul li');
    wid1 = aLi.eq(0).width();
    liNum =aLi.size();
    totalWidth=wid1*liNum
    oul.width(totalWidth);
    var tid = null;
    var speed = 2;
    function slide2(){

        if(speed>0){
            if(oul.css('left')=='0px'){
                oul.css('left',-totalWidth/2+'px')
            }
                oul.css('left','+='+speed+'px')

        }
        if(speed<0){
            oul.css('left','+='+speed+'px');
            if(oul.css('left')==-totalWidth/2){
                oul.css('left','0px');
            }
        }
    }

     tid =setInterval(slide2,30)

     $('.goLeft').click(function(){
         speed = -2;
     })
     $('.goRight').click(function(){
         speed = 2;
     })
     $('.wrap').mouseover(function(){
         clearInterval(tid)
     }).mouseout(function(){
        tid =setInterval(slide2,30)
         })

  })(jQuery)
