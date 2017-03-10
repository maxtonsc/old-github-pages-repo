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
	$("#March7Button").click(function(){
		blogpost("#March7Post");
	});

	$("#March3Button").click(function(){
		blogpost("#March3Post");
	});

	$('.hover').mouseover(function() {
  $('.text').css("visibility","visible");
});

}


function blogpost($contentName){
	$("#March3Post").css("display","none");
	$("#March7Post").css("display","none");
	$($contentName).css("display","block");
}
