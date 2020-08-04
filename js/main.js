// Jquery Start

$(document).ready(function(){
	$("button").click(function(){
		$("#header").slideToggle("slow");
	})
})


$(document).ready(function(){
	$(".action").click(function(){
		$(this).hide(5000);
	})
})