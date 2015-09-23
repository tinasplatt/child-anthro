$( document ).ready(function() {
	console.log( "ready!" );



	$(function () {
	  $('[data-toggle="popover"]').popover()
	});

	$("#humanMeasures label").click(function() {
		$(this).addClass("measureActive");
	
	});

	$(".types button").click(function(){
		var measure=$(this).data("measure");
		console.log(measure);
		$(".types button").removeClass("active");
		$(this).addClass("active");
		$("#humanMeasures label").hide()
		$("[data-measure-type='"+measure+"']").closest("label").show();
		console.log('poop')
	});
});