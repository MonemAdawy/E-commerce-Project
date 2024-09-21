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

// product number


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

// clear data

var clearCart=document.getElementsByClassName("clear")[0];

clearCart.onclick=function(){
    products_number=0;
    localStorage.setItem("products_number", products_number);
    $(".products-number").css({"display":"none"});
}


// checkout enabled when user signed in

var checkoutBtn=document.getElementsByClassName("checkout")[0];
var signin_checkout_disabled=document.getElementById("signin_checkout_disabled");

console.log(products_number);

if (signintrue && products_number>0) {
    checkoutBtn.disabled=false;
    $("#signin_checkout_disabled").css({"display":"none"})
}
else{
    checkoutBtn.disabled=true;
    $("#signin_checkout_disabled").css({"display":"inline"})
}