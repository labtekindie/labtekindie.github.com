//SMOOTH TOP DOWN SCROLLING



//Desktop Navigation Scroll
$(document).ready(function() {

    $(".scroll-link").click(function() {
        var ScrollOffset = $(this).attr('data-soffset');
        //alert(ScrollOffset);
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 500, //tadinya 1800
            easing: "easeOutQuad"
        });
       

        return false;
    });

});



