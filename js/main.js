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

	$("body > *").fadeOut( 500 );

	function emptyBody() {
    $('body > *').css("display","none");
    $('html').css("background-color","#ffffff");
    $('body').css("height","100%");
    $("#CV").css("display","flex");

    $(".resumePDF").css("visibility","visible");
    $(".resumePDF").css("display","none");
    $(".resumePDF").fadeIn(500).css("display","flex");

    	
    setTimeout(function(){
    	$("#CVTopDiv").css("display","flex");
    	$("#CVTopDiv").addClass("slideExpandUp")}, 1000);
 	}
	setTimeout(emptyBody, 600);

}

function displayBod(){
	$("#CV").fadeOut( 500 );
	setTimeout(function(){
    	$("#CV").css("display","none");
    	$("#CVTopDiv").removeClass("slideExpandUp");
 	}, 1000);	
	$('body > *:not(#CV)').fadeIn(1300).css("display","block");

}

