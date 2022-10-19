$(function () {
    //처음 화면
    $('.leftimg1').stop().delay(500).animate({left:0, opacity:1},1000);
    $('.rightimg1').stop().delay(500).animate({right:0, opacity:1},1000);
    $('.RNum1').css({background:'#897365', color:'#f9f9f9'});

    //버튼을 클릭했을 경우에 
    $('.room4>li').click(function(){
        let i = $(this).index();

        //왼쪽 사진
        $('.section_1_leftbottom>img').stop().animate({left:'-100%', opacity:0},1000);
        $('.section_1_leftbottom>img').eq(i).animate({left:0, opacity:1},1000);

        //오른쪽 사진
        $('.topimage>img').stop().animate({right:'-100%',opacity:0}, 1000);
        $('.topimage>img').eq(i).stop().animate({right:0,opacity:1}, 1000);

        //버튼
        $('.room4>li').css({background:'none', color:'#897365'});
        $('.room4>li').eq(i).css({background:'#897365', color:'#f9f9f9'});

        //active 클래스를 넣고, addClass/removeClass로 하는것이 better
    })
});