$(function(){
		$(".ul1").animate({top:"0"},700);
		$(".logo").animate({top:"0"},700);
		$(".tiyan").mouseenter(function(){
			$(this).stop().animate({backgroundColor:"#BF3826"},300);
		});
		$(".tiyan").mouseleave(function(){
			$(this).stop().animate({backgroundColor:"#f39800"},300);
		});
		$(".list a").mouseover(function(){
			
			$(this).css("color","#FFFFFF");
			$(this).stop().animate({backgroundColor:"#F39800"},300)
		});
		$(".list a").mouseleave(function(){
			$(this).css("color","#000000");
			$(this).stop().animate({backgroundColor:""},300)
		});
		$(".table-list").mouseenter(function(){
			$(".table-list-font h3").eq($(this).index()).css("color","#F39800");
			$(".table-list-image img").eq($(this).index()).css("transform","scale(1.2)");
		});
		$(".table-list").mouseleave(function(){
			$(".table-list-font h3").eq($(this).index()).css("color","");
			$(".table-list-image img").eq($(this).index()).css("transform","scale(1)");
		});
		$(".bottom-tiyan").mouseenter(function(){
				$(this).css("color","#000");
				$(this).stop().animate({backgroundColor:"#fff"},200);
		});
		$(".bottom-tiyan").mouseleave(function(){
				$(this).css("color","");
				$(this).stop().animate({backgroundColor:"rgba(0,0,0,0)"},200);
		});
	});