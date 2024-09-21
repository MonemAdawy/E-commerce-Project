// nav scroll

$(window).scroll(function(){
    let topOffset=$(window).scrollTop();

    if(topOffset>85)
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





// navbar when signin validation


let signintrue = localStorage.getItem("signintrue");

if (signintrue) {
    var signin_class = document.getElementsByClassName("sign-in");
    var register_class = document.getElementsByClassName("register")

    // Loop over the collection if there are multiple elements
    for (let i = 0; i < signin_class.length; i++) {
        signin_class[i].classList.add("sign-in_remove");
        signin_class[i].classList.remove("sign-in");
    }
    for (let i = 0; i < register_class.length; i++) {
        register_class[i].classList.add("register_remove");
        register_class[i].classList.remove("register");
    }
}

/////////////////////////////////////////


var products_number=0;
var addToCart=Array.from(document.getElementsByClassName("add-to-cart"));
var productInCart=document.getElementsByClassName("products-number")[0];


if (localStorage.getItem("products_number", products_number)==null || localStorage.getItem("products_number", products_number)==0) {
    products_number=0;
    $(".products-number").css({"display":"none"});
}
else{
    products_number=localStorage.getItem("products_number", products_number);
    productInCart.innerHTML=`${products_number}`;
    $(".products-number").css({"display":"flex"});
}

for (let index = 0; index < addToCart.length; index++) {
    addToCart[index].addEventListener("click",function(e){
        products_number++;
        localStorage.setItem("products_number", products_number);
        productInCart.innerHTML=`${products_number}`;
        $(".products-number").css({"display":"flex"});
    })
} 

