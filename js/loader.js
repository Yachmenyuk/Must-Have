$(document).ready(function() {
   
	 
	  $('.circle_loader').animate({rotate: '1080'}, 3000);
  	  $('.loader').css('background-size','70%');
	  $('.loader').delay(2500).animate({backgroundSize: '100%'}, 700);
      $('.loader').fadeOut(500);

    	
});
