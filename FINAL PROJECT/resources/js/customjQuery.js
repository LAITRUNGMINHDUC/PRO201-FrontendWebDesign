// JavaScript Document

function smoothlyScroll()
{
	$('a[href^="#"]').off();	
	$('a[href^="#"]').on('click', function(event) {		
		var target = $( $(this).attr('href') );		
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}		
	});        	
}

/* http://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh */
function scrollToTop()
{
	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});	
}

function clickResult()
{	
	renderResult();
	renderData();
	smoothlyScroll();
}

function changeBackgroundImg()
{
	var Rand = randomNumber(14,'');
	$('.background').css('background-image', 'url(resources/img/BACKGROUND/'+Rand+'.jpg)');
	$('.background2').css('background-image', 'url(resources/img/BACKGROUND2/'+Rand+'.jpg)');	
}