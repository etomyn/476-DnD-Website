// TO DO: have a condition where "if result == true", the information gets sent to the database so the user can sign in.

//SIGNUP PAGE
function SignUpForm() {
    // VARIABLES DEFINED BELOW
    // ------------------------------------------------------
    var result = true; // if this remains true, things will be sent to a server

    var a = document.forms.SignUp.su_email.value; // email
    var b = document.forms.SignUp.su_name.value; // name
    var c = document.forms.SignUp.su_pwd.value; // password
    var d = document.forms.SignUp.su_cpwd.value; // confirm password
    var e = document.forms.SignUp.su_secq.value; // security question
    var f = document.forms.SignUp.su_seca.value; // security answer

    // ------------------------------------------------------

    // REGEX DEFINED BELOW
    // ------------------------------------------------------
    var email_v = /^[a-zA-Z0-9._]+@[a-z]+\.+[a-z]{2,3}$/; // follows format fo abc12.hi@hi.ca
    var pword_v = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // ensures password has at least 1 number, at least 1 special character,  and that all letters are valid
    var name_v = /^[A-Z][a-z]+$/; // ensures names are just made of one capital and as many lower case as needed
    // ------------------------------------------------------


    // ERROR MESSAGES GATHERED BELOW AND PREPPED FOR ERRORING
    // ------------------------------------------------------
    document.getElementById("email_msg").innerHTML = "";
    document.getElementById("name_msg").innerHTML = "";
    document.getElementById("pwd_msg").innerHTML = "";
    document.getElementById("cpwd_msg").innerHTML = "";
    document.getElementById("secq_msg").innerHTML = "";
    document.getElementById("seca_msg").innerHTML = "";
    // ------------------------------------------------------

    // CODE BELOW TO TEST THINGS
    // ------------------------------------------------------
    
    // email verifier! ensure it isn't empty and that people follow the format of abc@hi.com
    if (a == null || a == "" || email_v.test(a) == false) {
        document.getElementById("email_msg").innerHTML = "Invalid email format. Example: abc@hi.com";
        result = false;
    }
    
    // if the name is empty, error message
    if (b == null || b == "" || name_v.test(b) == false) {
        document.getElementById("name_msg").innerHTML = "Your name cannot be blank.";
        result = false;
    }
    
    // password verifier
    if (c == null || c == "" || pword_v.test(b) == false) {
        document.getElementById("pwd_msg").innerHTML = "Invalid password format! Ensure it has 8+ characters, at least 1 number, and at least 1 symbol.";
        result = false;
    }

    // ensure the confirm password matches password
    if (d != c) {
       document.getElementById("cpwd_msg").innerHTML = "Passwords do not match.";
        result = false;
    }

    // if the security question is empty, error message
    if (e == null || e == "" || name_v.test(e) == false) {
        document.getElementById("secq_msg").innerHTML = "Security question cannot be blank.";
        result = false;
    }

    // if security answer is empty, error message
    if (f == null || f == "" || name_v.test(f) == false) {
        document.getElementById("seca_msg").innerHTML = "Security answer cannot be blank.";
        result = false;
    }
    
    // ------------------------------------------------------
    
    // If all else does not fail, sign up the user and let them know it worked!
    if (result == true) {
        alert("Welcome " + b + "! You may now sign in using your email.");
    }
}
