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
        var precio_regular = $(this).find('.precio_regular').html();
        var precio_descuento = $(this).find('.precio_descuento').html();
    	var contenido = $(this).find('.data-info').html();
        var condicion = $(this).find('.text_condiciones').html();
        var direccion = $(this).find('.text_direccion').html();
        var tarjetas = $(this).find('.cnt_tarjeta').find('ul').html();
        var legal = $(this).find('.text_legal').html();
    	$('#modalCupom').find('.left_d').css('background', 'url('+img+')');
    	$('#modalCupom').find('.porcentaje_m').text(porcentaje);
    	$('#modalCupom').find('h3').text(title);
    	$('#modalCupom').find('h4').text(local);
    	$('#modalCupom').find('.data-info-recep').html(contenido);
        $('#modalCupom').find('.content_uso').html(condicion);
        $('#modalCupom').find('.icon_dir').find('.cnt_info_dir').find('div').html(direccion);
        $('#modalCupom').find('.dir_tarj').find('ul').html(tarjetas);
        $('#modalCupom').find('.cnt_dir_legal').html(legal);
        $('#modalCupom').find('.p_r').html(precio_regular);
        $('#modalCupom').find('.p_d').html(precio_descuento);
    });

    $("#changeCat").change(function() {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        console.log(valueSelected);
        var slug_category = $(this).data('slug');
        var url_home = $(this).data('url');
        if(valueSelected == 'all'){
        	window.location.href = url_home;
        }else{
        	window.location.href = url_home+slug_category+'/'+valueSelected;
        }
        
        //window.location.href = url_home+;
    });

    $('#modalCupom').on('shown.bs.modal', function () {
        $("#condi-uso").mCustomScrollbar();
        $("#cnt_ul_dir_telf").mCustomScrollbar();
    });
    
    setTimeout(function(){
        var alturaH = $("#cuponslider .slider .item").height();
        $("#cuponslider .slider").css( "height", alturaH);
    }, 500);
    $(window).resize(function(){
        var alturaH = $("#cuponslider .slider .item").height();
        $("#cuponslider .slider").css( "height", alturaH);
    });

    /*responsive*/
    $('.ico-menu').click(function() {
        $('.ico-menu').removeClass('onn');
        $('.menu-prin').slideUp('normal');
        if($(this).next().is(':hidden') == true) {
            $(this).addClass('onn');
            $(this).next().slideDown('normal');
        }
    });
    $('.menu-prin').hide();
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
    var countCupons = $("#cuponslider").find('.slider').find('.item').size();
    if(countCupons>1){
        $(".left_icon").show();
        $(".right_icon").show();
    }else{
        $(".left_icon").hide();
        $(".right_icon").hide();
    }
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