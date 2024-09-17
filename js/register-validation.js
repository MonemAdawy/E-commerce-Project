
var username=document.getElementById("username");
var emailAddress=document.getElementById("email-address");
var pass_1=document.getElementById("pass-1");
var pass_2=document.getElementById("pass-2");
var registerForm=document.getElementById("registerForm")
var users=[];

if (localStorage.getItem("usersList") !== null) {
    users = JSON.parse(localStorage.getItem("usersList"));
}

function setError(elem, msg){
    let box = elem.parentElement;
    let error = box.querySelector(".error");

    error.innerText = msg;
    box.classList.add("error");
    box.classList.remove("success");
}


function setSuccess(elem){
    let box = elem.parentElement;
    let error = box.querySelector(".error");

    error.innerText = "";
    box.classList.add("success");
    box.classList.remove("error");
}


function userFormat(u) {
    var usernamePattern = /[^0-9]/;
    if (usernamePattern.test(u)) {
        return true;
    } else {
        return false;
    }
}


function emailFormat(e) {
    var emailPattern = /\w+@\w+.\w+/;
    if (emailPattern.test(e)) {
        return true;
    } else {
        return false;
    }
}


function validatePassword(password) {
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    if (passwordPattern.test(password)) {
        return true;
    } else {
        return false;
    }
}


function addUser(){
    var user={
        name:username.value.trim(),
        email:emailAddress.value.trim(),
        pass1:pass_1.value.trim(),
        pass2:pass_2.value.trim()
    }

    console.log(pass_1.value);

    users.push(user);
    localStorage.setItem("usersList",JSON.stringify(users));
}

var userBool=true,emailBool=true,pass1Bool=true,pass2Bool=true;


// var add_User=document.getElementById("addUser");

registerForm.addEventListener("submit",function(event){

    event.preventDefault();

    if (username.value === "") {
        setError(username, "Username is required");
        userBool=false;
    } else if (!userFormat(username.value)) {
        setError(username, "Digital are not allowed");
        userBool=false;
    } else {
        setSuccess(username);
        userBool=true;
    }

    if (emailAddress.value === "") {
        setError(emailAddress, "Email is required");
        emailBool=false;
    } else if (!emailFormat(emailAddress.value)) {
        setError(emailAddress, "Please enter a valid email");
        emailBool=false;
    } else {
        setSuccess(emailAddress);
        userBool=true;
    }

    if(pass_1.value=== ""){
        setError(pass_1, "Password is required");
        pass1Bool=false;
    }
    else if(!validatePassword(pass_1.value)){
        setError(pass_1, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
        pass1Bool=false;
    }
    else{
        setSuccess(pass_1);
        pass1Bool=true;
    }
    

    if (pass_2==="") {
        setError(pass_2, "Please confirm your password");
        pass2Bool=false;
    }
    else if(pass_1.value!=pass_2.value){
        
        setError(pass_2, "Passwords does't match");
        pass2Bool=false;
    }
    else{
        setSuccess(pass_2);
        pass2Bool=true;



        
        // var password=pass_1.value;
        // if(validatePassword(password)){
        //     addUser();
        //     window.location.href = "./signin.html";
        // }
        // else{
        //     setError(pass_2, "Passwords does't match");
        // }
        
    }



    if(userBool && emailBool && pass1Bool && pass2Bool)
    {
        addUser();
        window.location.href = "./signin.html";
    }
    
}
)


