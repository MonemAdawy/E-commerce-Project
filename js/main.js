// nav scroll


$(window).scroll(function(){
    let topOffset=$(window).scrollTop();

    if(topOffset>76)
    {
        $("header").css({"position":"fixed","left":"0","top":"0","right":"0","background-color":"var(--footer-bg)","color":"white", "z-index":"999", "padding-bottom": "0.3rem"})

        $("header .fa-solid").css({"color":"white"})

        $("header .cart .fa-solid").css({"color":"var(--blue)"})

        $("header .sign-in, header .register").hover(function() {
            $(this).find(".fa-solid").css("color", "var(--blue)");
        }, function() {
            $(this).find(".fa-solid").css("color", "white");  // Reset color on mouse leave
        });

        $("header .logo").css({"scale":"0.85"})
    }
    else{
        $("header").css({"position":"static","background-color":"transparent","color":"var(--icons)"})

        $("header .fa-solid").css({"color":"var(--icons)"})

        $("header .cart .fa-solid").css({"color":"var(--blue)"})

        $("header .sign-in, header .register").hover(function() {
            $(this).find(".fa-solid").css("color", "var(--blue)");
        }, function() {
            $(this).find(".fa-solid").css("color", "var(--icons)");  // Reset color on mouse leave
        });
        

        $("header .logo").css({"scale":"1"})
    }
})


