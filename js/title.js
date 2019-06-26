$(function(){
	$(".image-bottom").click(function(){
    		$("ul").fadeIn(500); 
    		});
    		 $(".search-text").hover(function () {
                 $('ul', this).stop().fadeIn();
            }, function () {
                 $('ul', this).stop().fadeOut();
            });
    		$(".a,.b").mouseover(function(){
    			$(this).css("background-color","#BF3826")
    		});
    		$(".a,.b").mouseleave(function(){
    			$(this).css("background-color","")
    		});
//  		li特效
			$(".ul1 li").mouseover(function(index){
				$(this).css("color","#F39800");
  				$(".ul2 li").eq($(this).index()).stop().animate({
      				height:'80px'
    			},200);
            })
            $(".ul1 li").mouseleave(function(index){
            	$(this).css("color","");
  				 $(".ul2 li").eq($(this).index()).stop().animate({
      				height:'0px'
    			},400);
            })
//          title背景颜色
            $(window).bind("scroll", function(){
    		var top = $(this).scrollTop(); // 当前窗口的滚动距离
    		if(top>100){
    			$(".nav").stop().animate({backgroundColor:"rgba(0,0,0,0.5)"} ,500);
    		}
    		if(top<=100){
       			$(".nav").stop().animate({backgroundColor:"rgba(0,0,0,0)"},500);
    		}
			});
			$(".fangan,.nav-bottom-fangan").mouseover(function(){
				$(".nav-bottom-fangan").stop().slideDown(300)
			});
			$(".nav-bottom-fangan,.fangan").mouseleave(function(){
				$(".nav-bottom-fangan").stop().slideUp(0)
			});
			$(".border-span").mouseover(function(){
				$("#chakan").css("color","white")
				$(this).stop().animate({backgroundColor:"#F39800"},100);
			});
			$(".border-span").mouseleave(function(){
				$("#chakan").css("color","#F39800")
				$(this).stop().animate({backgroundColor:""},100);
			});
			$(".kefu1,.kefu").mouseover(function(){
				$(".kefu").stop().slideDown(300)
			});
			$(".kefu1,.kefu").mouseleave(function(){
				$(".kefu").stop().slideUp(0);
				
			});
			$(".fuwu1,.fuwu").mouseover(function(){
				$(".fuwu").stop().slideDown(300)
			});
			$(".fuwu1,.fuwu").mouseleave(function(){
				$(".fuwu").stop().slideUp(0)
			});
			$(".guanyu").click(function(){
				location.href='guanyu.html';
			});
			$(".fangan").click(function(){
				location.href='fangan.html';
			});
			$(".kefu1").click(function(){
				location.href='kehu.html';
			});
			$(".fuwu1").click(function(){
				location.href='fuwu.html';
			});
			$(".news").click(function(){
				location.href='news.html';
			});
			$(".hezuo").click(function(){
				location.href='hezuo.html';
			});
			
			
});