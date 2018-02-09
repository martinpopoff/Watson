//Slideshow
var sources = ["Images/slideshow_1_mockup.jpg", "Images/slideshow_2_mockup.jpg", "Images/slideshow_3_mockup.jpg", "Images/slideshow_4_mockup.jpg" , "Images/slideshow_5_mockup.jpg"]
var next =-1;
var timer;
function Cycle() {
	//if(next%2==1) {
		$("#slideshow").fadeOut(500, function() {
			$("#slideshow").attr("src", sources[next]);	
			$("#slideshow").fadeIn(500);
		});
		//$("#slideshow_overlay").css("opacity", 0.05);
		//$("#slideshow_overlay").attr("src", sources[next]);	
	//}
	/*
	else {
		$("#slideshow").css("opacity", 0.05);
		$("#slideshow_overlay").css("opacity", 0.);
		$("#slideshow").attr("src", sources[next]);	
	}*/
	next++;
	if(next>sources.length-1) next = 0;
	setTimeout(function() {Cycle();}, 5000);	
}

jQuery(document).ready(function($) {
    $("#result1").click(function() {
        window.document.location = "#";
    });
	$(document).scroll(function() {
    	if($(document).scrollTop()>=700) {
			$("#menu").css("position", "fixed");
			$("#menu").css("margin-top", "0px");
		}
		else {
			$("#menu").css("position", "absolute");	
			$("#menu").css("margin-top", "700px");
		}
	});
	$("#search").keydown(function() {
		clearTimeout(timer);
		$(".results").fadeOut(500);
		$("#loading").fadeIn(500);
	});
	$("#search").keyup(function() {
		clearTimeout(timer);
		timer = setTimeout(ExampleSearch, 1000);
	});
	$(".select_wrap div").click(function() {
		console.log($(".select_wrap div").index(this))
	});
});

function ExampleSearch() {
	if($("#search").val()!="") {
		$("#loading").fadeOut(500);
		$(".results").fadeIn(500);
	}
	else {
		$("#loading").fadeOut(500);
		$(".results").fadeOut(500);
	}
}
