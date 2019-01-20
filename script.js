$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	$('.bottom_button')
		.each(function () {
			$(this).replaceWith('<button class="bottom_button">' + $(this).text() + '</button>');
		});

	$(".card")
		.each(function (index) {
			$(this).attr('id', "card_" + (index+1));
		});

	$(".bottom_button").addClass("makeRed");

	$(".bottom_button")
		.mouseenter(function () {
			$(this).removeClass("makeRed").addClass("makeBorder");
		})
		.mouseleave(function () {
			$(this).removeClass("makeBorder").addClass("makeRed");
		});

	// $(".bottom_button")
	// 	.click(function() {
	// 		$(this).siblings("p").slideToggle("slow");
	// 	});
		
	$("#card_1 .bottom_button")
		.click(function() {
			$(this).siblings("p").slideToggle("slow");
		});
		
	$("#card_2 .bottom_button")
		.click(function () {
			$(this).siblings("p").hide("slow").show("slow");
		});
	
	$("#card_3 .bottom_button")
		.click(function () {
			$(this).siblings("p").fadeOut("slow").fadeIn("slow");
		});

	
	$("#card_4")
		.mouseenter(function () {
			$(this).children().show("fast");
		})
		.mouseleave(function () {
			$(this).children().hide("slow");
		});

	$("#card_5")
		.mouseenter(function () {
			$(this).children().fadeIn("fast");
		})
		.mouseleave(function () {
			$(this).children().fadeOut("slow");
		});
	
	
	
}); 
