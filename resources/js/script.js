$(document).ready(function(){
    /* For sticky navigation */
   $('.js--section-features').waypoint(function(direction){
       if (direction == "down"){
           $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
       }
   }, {
  offset: '70px;'
    
});
    
    /* Scroll buttons */
    $('.js--scroll-to-contact').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1500); 
    });
    $('.js-scroll-to-features').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    /* Navigation scroll*/
    
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
        
});
    
    /* Scroll animation */
    
      $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated zoomIn');
    }, {
        offset:'60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset:'60%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset:'60%'
    });
    

/* Mobile nav */
        $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon  i' );
        
        nav.slideToggle(200);
        
       if (icon.hasClass('ion-toggle')) {
            icon.addClass('ion-toggle-filled');
            icon.removeClass('ion-toggle');
        } else {
            icon.addClass('ion-toggle');
            icon.removeClass('ion-toggle-filled');
        }
            
        
    }); 
/* Map */
    var map = new GMaps({
     div: '#map',
      lat: 52.428768, 
      lng: 16.9672143,
            zoom: 12
});
    map.addMarker({   
          lat: 52.4586886,  
          lng: 16.9119531,
          title: 'Poznań',
                  infoWindow: {
                      content: '<p>My place</p>'
        }
    });

});
