
$(".toggler").on("click", function() {
  $(".flip-card").toggleClass("flip");
  $(".about-des .info1").toggleClass("d-0");
});


// NIVO LIGHTBOX
$('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
