$( document ).ready(function() {
	console.log( "ready!" );

	$("#humanMeasures label").hide()
	$("[data-measure-type='data1']").closest("label").show();

	$(function () {
	  $('[data-toggle="popover"]').popover()
	});

	$("#humanMeasures label").click(function() {
		$(this).addClass("measureActive");
	
	});



	// var slider = document.getElementById('slider');

	// noUiSlider.create(slider, {
	// 	start: [20, 80],
	// 	connect: true,
	// 	range: {
	// 		'min': 0,
	// 		'max': 100
	// 	}
	// });

});