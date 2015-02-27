//JSHint Validated Custom JS Code by Designova

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     //Detecting viewpot dimension and calculating the adjustments of components   
     var vW = $(window).width();
     var vH = $(window).height();
     var vHperc30 = vH*30/100;
     var vHperc15 = vH*15/100;
     var vHperc25 = vH*25/100;
    //$('#welcome').css('height', vH-40);
    $('#welcome').css('height', vH);
    $('#welcome h1').css('margin-top', vHperc25);
     //Counting number of nav-items and adjusting the height accordingly
    
    //Nav highlight
    
    $('#mast-nav li > a').click(function(){
        $('#mast-nav li > a').removeClass('active');
        $(this).addClass('active');
    });

    $('.page-section').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('#mast-nav li > a').removeClass('active');
        $('#'+sectionId+'-linker').addClass('active');
    });

    //Parallax Init
    $(window).stellar({
        responsive: true,
        horizontalScrolling: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: true
    });

    //WAYPOINTS - INTERACTION
    //=======================

    //Triggering Navigation as Sticky when scrolled to second section:
    $('.navigation-fadeIn').waypoint(function (event, direction) {
        if (direction === 'down') {
            $('#sidebar-nav').addClass('show-nav');
        }
    }, { offset: 10 });

//Custom functions 

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



    
	
});


})();








	

