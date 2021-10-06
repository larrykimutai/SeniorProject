function submit(){
    const form = document.getElementById("fill").elements;
    var username = form["username"];

    let x = document.forms["myForm"]["username"].value;
    if(x === "a") {
        alert("testing");
        return false;
    }
    if(username.length < 4){
        document.getElementById("output").innerHTML = "Password must be longer than 4 characters"
    }
}

function clear(){

}