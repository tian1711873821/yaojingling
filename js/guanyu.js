$(function(){
		$(".fangan").click(function(){
			window.open("fangan.html");
		});
		$(".ul1").animate({top:"0"},700)
		$(".logo").animate({top:"0"},700)
		$(".tiyan").mouseenter(function(){
			$(this).stop().animate({backgroundColor:"#BF3826"},300);
		});
		$(".tiyan").mouseleave(function(){
			$(this).stop().animate({backgroundColor:"#f39800"},300);
		});
		var num=1;
		$("#next").click(function(){
			num=num+1;
			if(num==6){
				num=1;
			}
			console.log(num)
			if(num==1){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
			}
			if(num==2){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
			}
			if(num==3){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
			}
			if(num==4){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
			}
			if(num==5){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
			}
		});
		$("#prev").click(function(){
			num=num-1;
			if(num==-4){
				num=1;
			}
			console.log(num);
			if(num==1){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
			}
			if(num==2||num==0){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
			}

			if(num==3||num==-1){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
			}
			if(num==4||num==-2){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
			}
			if(num==5||num==-3){
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
				$(".zilitop1-p").stop().animate({top:"10px"},500);
				$(".zilibottom-p").stop().animate({top:"150px"},500);
				
				$(".zilitop1-p").css("top","50px");
				$(".zilibottom-p").css("top","100px");
				
			}
		});
		var num=0;
		$(".goright").click(function(){
			index=0;
			num++;
			widthrange=-num*300-600;
			if(widthrange<=-1500){
				num=0;
				widthrange=-600;
			}
//			if((".wenhua-box").offset().left==-1500){
//				num=0;
//				widthrange=-600;
//			}
//			console.log($(".wenhua-box").offset().left)
			console.log(widthrange)
			console.log(num)
			$(".wenhua-box").stop().animate({left:widthrange+"px"},300);
		});
		var index=0;
		$(".goleft").click(function(){
			num=0;
			index++;
			widthleft=300*index;
			if(index>2){
				widthleft=0;
			}
			
			$(".wenhua-box").stop().animate({left:widthrange+widthleft+"px"},300);
		});
		$(".shehuizhaopin,.xiaoyuanzhaopin").mouseenter(function(){
				$(this).stop().animate({backgroundColor:"#fff"},500);
			});
		$(".shehuizhaopin,.xiaoyuanzhaopin").mouseleave(function(){
				$(this).stop().animate({backgroundColor:"rgba(0,0,0,0)"},500);
		});
		$(window).bind("scroll", function(){
    		var top = $(this).scrollTop(); // 当前窗口的滚动距离
    		console.log(top);
    		if(top>2200){
    			$(".xiaoyuanzhaopin").stop().animate({marginLeft:"200px"},500);
    		}
    		if(top<2200){
    			$(".xiaoyuanzhaopin").stop().animate({marginLeft:"20px"},500);
    		}
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