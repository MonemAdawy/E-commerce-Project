



var usersToSignin=JSON.parse(localStorage.getItem("usersList"));


function setError(elem, msg){
    let box = elem.parentElement;
    // let error = box.querySelector(".error");
    let signForm = box.parentElement;
    let error = signForm.querySelector(".error");

    error.innerText = msg;
    signForm.classList.add("error");
    signForm.classList.remove("success");
}


function setSuccess(elem){
    let box = elem.parentElement;
    // let error = box.querySelector(".error");
    let signForm = box.parentElement;
    let error = signForm.querySelector(".error");

    error.innerText = "";
    signForm.classList.add("success");
    signForm.classList.remove("error");
}



var signinBtn=document.getElementById("signin_btn");

signinBtn.onclick=function(event){
    var signinBool=false;

    event.preventDefault();

    const username_signin=document.getElementById("username_signin");
    const pass_signin=document.getElementById("password_signin");
    console.log(username_signin);
    console.log(pass_signin);

    for (let i = 0; i < usersToSignin.length; i++) {
        if (username_signin.value==usersToSignin[i].name && pass_signin.value==usersToSignin[i].pass1) {
            signinBool=true;
            break;
        }
    }

    if(username_signin=="" || pass_signin=="") {
        setError(username_signin, "Input field has no value");
    }
    else if(signinBool==false) {
        setError(username_signin, "Something is wrong");
    }
    else{
        setSuccess(username_signin);
    }
}

