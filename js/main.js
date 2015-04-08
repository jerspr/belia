$(document).ready(function(){
	$("#cuponslider").iosSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        keyboardControls: false,
        infiniteSlider: true,
        
        navPrevSelector: $("#cuponslider .left_icon"),
        navNextSelector: $("#cuponslider .right_icon"),
        onSlideComplete: slideComplete,
		onSliderLoaded: sliderLoaded,
		onSlideChange: slideChange
    });

    /*Modal Active*/
    $(".clickModal").click(function(event){
    	$('#modalCupom').modal('show');
    	var img = $(this).data('img');
    	var porcentaje = $(this).find('h4').text();
    	var title = $(this).find('h2').text();
    	var local = $(this).find('h5').text();
    	var contenido = $(this).find('.data-info').text();
    	$('#modalCupom').find('img').attr('src', img);
    	$('#modalCupom').find('.porcentaje_m').text(porcentaje);
    	$('#modalCupom').find('h3').text(title);
    	$('#modalCupom').find('h4').text(local);
    	$('#modalCupom').find('p').text(contenido);
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