$(function(){
	$(".tiyan").mouseenter(function(){
			$(this).stop().animate({backgroundColor:"#BF3826"},300);
		});
		$(".tiyan").mouseleave(function(){
			$(this).stop().animate({backgroundColor:"#f39800"},300);
		});
		$(".ul1").animate({top:"0"},700);
		$(".logo").animate({top:"0"},700);
		$(".bottom-tiyan").mouseenter(function(){
				$(this).css("color","#000");
				$(this).stop().animate({backgroundColor:"#fff"},200);
		});
		$(".bottom-tiyan").mouseleave(function(){
				$(this).css("color","");
				$(this).stop().animate({backgroundColor:"rgba(0,0,0,0)"},200);
		});
		$(".baominghezuo").mouseenter(function(){
				$(this).css("color","#FFF");
				$(this).stop().animate({backgroundColor:"#F38900"},200);
		});
		$(".baominghezuo").mouseleave(function(){
				$(this).css("color","");
				$(this).stop().animate({backgroundColor:"rgba(0,0,0,0)"},200);
		});
		$(".fuwu-1").mouseenter(function(){
			$(".fuwu-icon1").css("transform","scale(1.5)")
			$(".fuwu-icon1").stop().css("opacity","0");
			$(this).css("background","#FF7256");
			$(".fuwu-fonts1").css("display","block");
		});
		$(".fuwu-1").mouseleave(function(){
			$(".fuwu-icon1").css("transform","scale(1)")
			$(".fuwu-icon1").stop().css("opacity","1");
			$(this).css("background","");
			$(".fuwu-fonts1").css("display","none");
		});
		$(".fuwu-2").mouseenter(function(){
			$(".fuwu-icon2").css("transform","scale(1.5)")
			$(".fuwu-icon2").stop().css("opacity","0");
			$(this).css("background","#FF7256");
			$(".fuwu-fonts2").css("display","block");
		});
		$(".fuwu-2").mouseleave(function(){
			$(".fuwu-icon2").css("transform","scale(1)")
			$(".fuwu-icon2").stop().css("opacity","1");
			$(this).css("background","");
			$(".fuwu-fonts2").css("display","none");
		});
		$(".fuwu-3").mouseenter(function(){
			$(".fuwu-icon3").css("transform","scale(1.5)")
			$(".fuwu-icon3").stop().css("opacity","0");
			$(this).css("background","#FF7256");
			$(".fuwu-fonts3").css("display","block");
		});
		$(".fuwu-3").mouseleave(function(){
			$(".fuwu-icon3").css("transform","scale(1)")
			$(".fuwu-icon3").stop().css("opacity","1");
			$(this).css("background","");
			$(".fuwu-fonts3").css("display","none");
		});
		$(".fuwu-4").mouseenter(function(){
			$(".fuwu-icon4").css("transform","scale(1.5)")
			$(".fuwu-icon4").stop().css("opacity","0");
			$(this).css("background","#FF7256");
			$(".fuwu-fonts4").css("display","block");
		});
		$(".fuwu-4").mouseleave(function(){
			$(".fuwu-icon4").css("transform","scale(1)")
			$(".fuwu-icon4").stop().css("opacity","1");
			$(this).css("background","");
			$(".fuwu-fonts4").css("display","none");
		});
		$(window).bind("scroll", function(){
    		var top = $(this).scrollTop(); // 当前窗口的滚动距离
    		console.log(top);
    		if(top>300){
    			$(".hezuopengyou img").css("top","20px");
    			$(".hezuopengyou div").css("top","800px");
    		}
    		if(top>1300){
    			$(".ZZ-donghua1").css({"top":"0px","opacity":"1"});
    		}
    		if(top>1565){
    			$(".ZZ-donghua2").css({"top":"265px","opacity":"1"});
    		}
    		if(top>1830){
    			$(".ZZ-donghua3").css({"top":"530px","opacity":"1"});
    		}
    		if(top>2095){
    			$(".ZZ-donghua4").css({"top":"795px","opacity":"1"});
    			$(".ZZ-donghua5").css("top","1160px");
    		}
    		if(top>2600){
    			$(".shangyemoshi img").css("top","50px");
    			$(".shangyemoshi div").css("top","580px");
    		}
    		if(top>3400){
    			$(".fuwu-1").css({"left":"10px","opacity":"1"});
    			$(".fuwu-2").css({"left":"313px","opacity":"1"});
    			$(".fuwu-3").css({"left":"616px","opacity":"1"});
    			$(".fuwu-4").css({"left":"919px","opacity":"1"});
    			$(".fuwu-hezuo").css("top","320px");
    		}
    		if(top>4000){
    			$("#JM-donghua1").css({"left":"0px","opacity":"1"});
    			$("#JM-donghua2").css({"left":"230px","opacity":"1"});
    			$("#JM-donghua3").css({"left":"460px","opacity":"1"});
    			$("#JM-donghua4").css({"left":"690px","opacity":"1"});
    			$("#JM-donghua5").css({"left":"920px","opacity":"1"});
    			$(".JM-hezuo").css("top","450px");
    		}
			});
	});