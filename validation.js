function submit(){
    let username = document.forms["myForm"]["username"].value;

    document.getElementById("output").innerHTML = "";
    //check if username is not too long or too short

    if(username.length < 4 || username.length > 12){


        if(username.length < 4) {
            if(!username){document.getElementById("output").innerHTML
                = document.getElementById("output").innerHTML + "Please Enter Username<br><br>";
            }else {document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "Username must be longer than 4 characters<br><br>";
        }
        if(username.length > 12){
            document.getElementById("output").innerHTML
                = document.getElementById("output").innerHTML + "Username must be less than 12 characters<br><br>";
        }
    }}

    //check if username contains uppercase
    if(username.toLowerCase() != username){
        if(!username){document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter Username<br><br>";
        }else document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Username must contain only lower case<br><br>";
    }

    //check if username contains other non-digit or non-alphabetic characteres are included
    let numlett = /^[0-9a-zA-Z]+$/;
    if(!(username.match(numlett))){
        if(!username){document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "";
        }else document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Username must contain only letter or numbers<br><br>";
    }

    let email = document.forms["myForm"]["email"].value;

    //check if email contains '@'
    if(!email){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please Enter Email<br><br>";
    }
    if(email && !(email.includes("@"))){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Email must contain '@'<br><br>";
    }if(email && !(email.includes(".com",(email.length - 4)))){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Email must contain .com/.org/.edu/.net<br><br>";
    }

    //check if phone number is 10 digits
    let number = document.forms["myForm"]["phone"].value;
    if(!number){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please enter phone number<br><br>";
    }
    if(number && (!(number.includes('(',0)) || !(number.includes(')',4)) || !(number.includes('-',5)) || !(number.includes('-',9))) ){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please enter phone number in following format (000)-000-0000<br><br>";
    }
    if(number && number.length < 14){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please enter valid phone number<br><br>";
    }
    let lett = /[a-zA-Z]/g;
    if(number && number.match(lett)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please enter valid phone number with only digits<br><br>";
    }


    //validate password
    let password = document.forms["myForm"]["password"].value;
    let confPassword = document.forms["myForm"]["confPassword"].value;

    if(!password){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please enter password<br><br>";
    }

    if(password && password.length < 8){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Password must be longer than 8 characters<br><br>";
    }

    let pas = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    let pasUp = new RegExp(/[A-Z]/);
    let pasLow = new RegExp(/[a-z]/);
    let pasNum = new RegExp(/[0-9]/)
    if(password && !pas.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Password must contain at least one special character<br><br>";
    }if(password && !pasUp.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Password must contain at least one uppercase letter<br><br>";
    }if(password && !pasLow.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Password must contain at least one lower case letter<br><br>";
    }if(password && !pasNum.test(password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Password must contain at least one number<br><br>";
    }

    //validate confirm password field
    if(password && !confPassword){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Please confirm password<br><br>";
    }
    if((password && confPassword) && !(confPassword === password)){
        document.getElementById("output").innerHTML
            = document.getElementById("output").innerHTML + "Password does not match<br><br>";
    }


}



function clear(){

}