var $container = $('.portfolio-items').isotope('layout');

// filter items on button click
$('.portfolio-filter').on( 'click', 'a', function(e) {
  e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });

  $('.portfolio-filter li').removeClass('active');
  $(this).closest('li').addClass('active');
});

window.onload = function(){
	$container.isotope({filter:'*'});


	$("#March22Button").click(function(){
		blogpost("#March22Post");
	});
	$("#March12Button").click(function(){
		blogpost("#March12Post");
	});

	$("#March3Button").click(function(){
		blogpost("#March3Post");
	});

	$("#March13Button").click(function(){
		blogpost("#March13Post");
	});

	$('.hover').mouseover(function() {
  $('.text').css("visibility","visible");

});

}




function blogpost($contentName){
	$("#March22Post").css("display","none");
	$("#March13Post").css("display","none");
	$("#March3Post").css("display","none");
	$("#March12Post").css("display","none");
	$($contentName).css("display","block");
}


function displayCV(){

	$("body > *").fadeOut( 2000 );

	function emptyBody() {
    $('body > *').css("display","none");
    $('html').css("background-color","#ffffff");
    $('body').css("height","100%");
    $("#CV").css("display","flex");
    $("#CVTopDiv").css("display","flex");
    $("#CVTopDiv").addClass("slideExpandUp");

    	
    setTimeout(function(){
    	$("#CVMidDiv").css("display","flex");
    	$("#CVMidDiv").addClass("slideExpandUp")}, 200);
 	
 	setTimeout(function(){
 		$("#CVBotDiv").css("display","flex");
    	$("#CVBotDiv").addClass("slideExpandUp")}, 400);
 	}
	setTimeout(emptyBody, 3000);

}

function displayBod(){
	$("#CV  > *").fadeOut( 1000 );
	
	setTimeout(function(){
    	$("#CV").css("display","none");
    	$("#CVTopDiv").removeClass("slideExpandUp");
		$("#CVMidDiv").removeClass("slideExpandUp");
		$("#CVBotDiv").removeClass("slideExpandUp");
 	}, 1000);	
	$('body > *:not(#CV)').fadeIn(2000).css("display","block");


	
}

