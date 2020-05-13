$(document).ready(function(){
	$('.block__title').on('click',function(){
		$(this).children('.block__title-icon').children().toggleClass('block__title-icon__js').css('transition','0.5s');
		$(this).next().slideToggle();
		
	});
	// ------------slide--------------------
	var width=$('.slides').width();
	$('.slides').width(width*3);

	$('.slide__inner:last-child').prependTo('.slides');
	$('.slides').css('right',width);

	function goNextSlide(){
		$('.slides').animate({
			'margin-left':-width
		},800,function(){
			$('.slide__inner:first-child').appendTo('.slides');
			$('.slides').css('margin-left',0);
		});
	}
		function goPrevSlide(){
		$('.slides').animate({
			'margin-left':width
		},800,function(){
			$('.slide__inner:last-child').prependTo('.slides');
			$('.slides').css('margin-left',0);
		});
	}

	$('.right-angle').click(goNextSlide);
	$('.left-angle').click(goPrevSlide);
	// ------------forus--------------------
    var width1=$('.forus__slides').width();
	$('.forus__slides').width(width1*3);


    $('.forus__slides').css('right',width1);
	$('.forus__slide:last-child').prependTo('.forus__slides');

	function goNextSlideForus(){
		$('.forus__slides').animate({
			'margin-left': -width1
		},800,function(){
			$('.forus__slide:first-child').appendTo('.forus__slides');
			$('.forus__slides').css('margin-left',0);
		});
	}
	function goPrevSlideForus(){
		$('.forus__slides').animate({
			'margin-left': width1
		},800,function(){
			$('.forus__slide:last-child').prependTo('.forus__slides');
			$('.forus__slides').css('margin-left',0);
		});
	}

	$('.forus__right-angle').click(goNextSlideForus);
	$('.forus__left-angle').click(goPrevSlideForus);
});