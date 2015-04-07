$(document).ready(function(){
	$("#cuponslider").iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        keyboardControls: false,
        infiniteSlider: false,
        
        navPrevSelector: $("#cuponslider .left_icon"),
        navNextSelector: $("#cuponslider .right_icon"),
        onSlideComplete: slideComplete,
		onSliderLoaded: sliderLoaded,
		onSlideChange: slideChange
    });

    /*Modal Active*/
    $(".clickModal").click(function(event){
    	console.log("Ise click");
    	$('#modalCupom').modal('show');
    });
});

function slideChange(args) {		
	//$('.sliderContainer .slideSelectors .item').removeClass('selected');
	//$('.sliderContainer .slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
}

function slideComplete(args) {
	/*if(!args.slideChanged) return false;
	$(args.sliderObject).find('.text1, .text2').attr('style', '');
	$(args.currentSlideObject).find('.text1').animate({
		left: '30px',
		opacity: '0.8'
	}, 700, 'easeOutQuint');
	$(args.currentSlideObject).find('.text2').delay(200).animate({
		left: '30px',
		opacity: '0.8'
	}, 600, 'easeOutQuint');*/
}

function sliderLoaded(args) {	
	/*$(args.sliderObject).find('.text1, .text2').attr('style', '');
	$(args.currentSlideObject).find('.text1').animate({
		left: '30px',
		opacity: '0.8'
	}, 700, 'easeOutQuint');
	$(args.currentSlideObject).find('.text2').delay(200).animate({
		left: '30px',
		opacity: '0.8'
	}, 600, 'easeOutQuint');*/
	//slideChange(args);
}