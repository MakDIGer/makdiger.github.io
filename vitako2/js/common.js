$(document).ready(function() {
 
$('.owl-carousel').owlCarousel({
    items: 4,
    dots: true,
    autoplay: true,
    autoHeight : true,
    loop: true,
    responsive : {
    		1 : { items : 1  },
            767 : { items : 2  }, // from zero to 480 screen width 4 items
            991 : { items : 3  }, // from 480 screen widthto 768 6 items
            1199 : { items : 4   // from 768 screen width to 1024 8 items
            }
        },
});

   $("a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+ "px"
      }, {
         duration: 1600, 
         easing: "swing"
      });
      return false;
   });

   $(window).scroll(function() {
 		if($(this).scrollTop() != 0) { 
			$('#toTop').fadeIn(); 
		} else {
			$('#toTop').fadeOut();
		}
 
	});
 
	$('#toTop').click(function() {
 
	$('body,html').animate({scrollTop:0},800);
 
	});

	animateCSS('.img-animate', 'bounce')

});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

new WOW().init();