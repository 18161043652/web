$(function(){
	//关闭声音
	document.getElementById("myVideo").muted = true;
	
	//顶部导航变化	
	$(window).scroll(function() {
		
	 	var height= $(window).scrollTop();
	 
		if (height>25) {
			$(".menu").addClass('menuadd');
		}else{
			$(".menu").removeClass('menuadd');
		}
	  
	});
	
	//about 图标进入动画
	$(".about").hover(function(){
		i=3;
		var over=setInterval(function(){
			console.log(i);
			$(".about_leftb .about_or").eq(i).addClass("aboutin");
			i--;
			if (i<-1) {
				clearInterval(over);
			}
			
		},200);
	})
	
	//about 触碰效果
	$(".about_or").hover(function(){
		
		$(this).find('.img').animate({
			scrollTop:66
		},500);
	},function(){
		$(this).find('.img').animate({
			scrollTop:0
		},500);
	})
			
	//about 右边文字入场
	$(".about").hover(function(){
		
		$(".about_rightb").eq(0).addClass("aboutinr");
	
		setTimeout(function(){
			$(".about_rightb").eq(1).addClass("aboutinr");
		},300)
		
		setTimeout(function(){
			$(".about_rightb").eq(2).addClass("aboutinr");
		},600)

	})	
	
})