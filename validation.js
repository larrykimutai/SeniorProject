function submit(){
    let username = document.forms["myForm"]["username"].value;

    document.getElementById("output").innerHTML = "";
    //check if username is not too long or too short

    if(username.length < 4 || username.length > 12){


        if(username.length < 4) {
            if(!username){document.getElementById("output").innerHTML
                = document.getElementById("output").innerHTML + "Please Enter <span style='color: red;'>Username</span><br><br>";
            }else {document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Username longer than 4 characters</span><br><br>";
            }
        }
        if(username.length > 12){
            document.getElementById("output").innerHTML
                = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Username less than 12 characters</span><br><br>";
        }
    }

    //check if username contains uppercase
    if(username.toLowerCase() != username){
        if(!username){document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: red;'>Username</span><br><br>";
        }else document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Username with only lower case letters</span><br><br>";;
    }

    //check if username contains other non-digit or non-alphabetic characteres are included
    let numlett = /^[0-9a-zA-Z]+$/;
    if(!(username.match(numlett))){
        if(!username){document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "";
        }else document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Username with only letters and numbers</span><br><br>";
    }

    let email = document.forms["myForm"]["email"].value;

    //check if email contains '@'
    if(!email){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: red;'>Email</span><br><br>";
    }
    if(email && !(email.includes("@"))){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Valid email (@)</span><br><br>";
    }if(email && !((email.includes(".com",(email.length - 4))) ||  (email.includes(".org",(email.length - 4))) ||
        (email.includes(".edu",(email.length - 4)))  ||  (email.includes(".net",(email.length - 4))) || (email.includes(".gov",(email.length - 4))) )){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Valid email (.com/.org.edu/.net/.gov)</span><br><br>";
    }

    //check if phone number is 10 digits
    let number = document.forms["myForm"]["phone"].value;
    if(!number){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: red;'>Phone Number</span><br><br>";
    }
    if(number && (!(number.includes('(',0)) || !(number.includes(')',4)) || !(number.includes('-',5)) || !(number.includes('-',9))) ){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Valid phone number (000)-000-0000 </span><br><br>";
    }
    if(number && (number.length > 14 || number.length < 14)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Valid phone number</span><br><br>";
    }
    let lett = /[a-zA-Z]/g;
    let pass = new RegExp(/[~`!#$%\^&*+=[\]\\';,/{}|\\":<>\?]/);
    if(number && (number.match(lett) || number.match(pass))){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Valid phone number with only digits</span><br><br>";
    }


    //validate password
    let password = document.forms["myForm"]["password"].value;
    let confPassword = document.forms["myForm"]["confPassword"].value;

    if(!password){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: red;'>Password</span><br><br>";
    }

    if(password && password.length < 8){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML +"Please Enter <span style='color: orange;'>Password with more than 8 characters</span><br><br>";
    }

    let pas = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    let pasUp = new RegExp(/[A-Z]/);
    let pasLow = new RegExp(/[a-z]/);
    let pasNum = new RegExp(/[0-9]/)
    if(password && !pas.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Password with at least one special character</span><br><br>";
    }if(password && !pasUp.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Password with at least one uppercase letter</span><br><br>";
    }if(password && !pasLow.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Password with at least one lowercase letter</span><br><br>";
    }if(password && !pasNum.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter <span style='color: orange;'>Password with at least one number</span><br><br>";
    }

    //validate confirm password field
    if(password && !confPassword){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please<span style='color: red;'>Confirm Password</span><br><br>";
    }
    if((password && confPassword) && !(confPassword === password)){
        alert("PASSWORDS DO NOT MATCH!");
    }


    //validate gender is selected
    let gender = document.forms["myForm"]["gender"].value;

    if(!gender){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Select <span style='color: red;'>Gender</span><br><br>";
    }

    //validate age group is selecte
    let age = document.forms["myForm"]["ageGroup"].value;

    if(!age){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Select <span style='color: red;'>Age Group</span><br><br>";
    }


}



function clear(){
    let username = document.forms["myForm"]["username"].value;

    document.getElementById("output").innerHTML = "";
}