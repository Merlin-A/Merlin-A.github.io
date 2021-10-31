$(document).ready(function () {

    $(window).scroll(function () { // of scroll function of windows
        if (this.scrollY > 20) { //if scroll on Y axis is more than 50 units
            $('.navbar').addClass("sticky"); // add sticky class 2 navbar
        } else {
            $('.navbar').removeClass("sticky"); // when it insn't scrolled remove sticky

        }


        
        if (this.scrollY >  500) {

            $('.scroll-up-btn').addClass("show");

        } else {
            $('.scroll-up-btn').removeClass("show");

        }

       
    });


    

    
    //slide-up Script

   
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });




    //toggle menu/navbar script
    $('.menu-btn').click(function () { // this activates the inbuilt click function of js on the menu button
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


    });





    // TYping TExt SCript

       var typed = new Typed(".typing", {
        strings: ["an Undergrad.", "a Python Developer.", "a Web Developer.", "a Tech Enthusiast."],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,

        loop: true
        
    });



});