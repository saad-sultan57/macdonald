$(document).ready(function() {
    // Hide the preloader and show the content when everything is loaded
    $(window).on('load', function() {
        
        $('.loadmore').animate({width:'100%'},"slow");
        $('.preloader').fadeOut('slow');
    });

        // Show the "scroll to top" button when user scrolls down
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scrollToTopBtn').css({visibility:'visible'});
            } else {
                $('#scrollToTopBtn').css({visibility:'hidden'});
            }
        });
    
        // Scroll to the top when the button is clicked
        $('#scrollToTopBtn').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        // $(window).scroll(function() {
        //     if ($(this).scrollTop() > 170) {
        //         $('.sec-header').animate({top:'0'}).slideDown('slow');
        //     }else {
        //         $('.sec-header').animate({top:'-90'}).slideDown('slow');
        //     }
        // });

    
});