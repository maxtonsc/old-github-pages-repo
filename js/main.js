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
	$("#March13Post").css("display","none");
	$("#March3Post").css("display","none");
	$("#March12Post").css("display","none");
	$($contentName).css("display","block");
}
