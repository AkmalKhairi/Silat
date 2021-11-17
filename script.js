/*
Ahmad Adi Iman bin Zuraidi
B031920027
SILAT CEKAK WEBPAGE
*/

function changeBG(val){
    var body = document.getElementsByTagName("body")[0];
    if (val == 1){
        body.style.backgroundColor = "blue";
    }

    else if (val == 2){
        body.style.backgroundColor = "red";
    }

    if (val == 3){
        body.style.backgroundColor = "purple";
    }
}

function changeWebsite(val){
    if (val == "utem"){
        location.href = "https://www.utem.edu.my"
    }

    else if (val == "ftmk"){
        location.href = "https://ftmk.utem.edu.my"
    }
}

var form = document.getElementById("form");
form.onsubmit = (event)  =>{
    event.preventDefault();

    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("address").value;
    var d = document.getElementById("fem").checked;
    var e = document.getElementById("mal").checked;
    var f = document.getElementById("comment").value;
    var g = document.getElementById("google").checked;
    var h = document.getElementById("fb").checked;
    var i = document.getElementById("utem").checked;

    var gender = "Not Defined by User";

    if (d) gender = "Female";
    else if (e) gender = "Male";

    var websites = "";

    if (g) websites += "Google ";
    if (h) websites += "Facebook ";
    if (i) websites += "UTeM ";


    var write = `
        <b>Name : </b>  ${a} <br>
        <b>Email : </b>  ${b} <br>
        <b>Address : </b>  ${c} <br>
        <b>Gender : </b>  ${gender} <br>
        <b>Comment : </b>  ${f} <br>
        <b>Favorite Site : </b>  ${websites} <br>
    `;

    document.getElementById("submitted").innerHTML = write;

}


var bgColor = document.getElementById("bgColor");
var websitesel = document.getElementById("websiteRedirect");

bgColor.onchange = () => {changeBG(bgColor.value);}
websitesel.onchange = () => {changeWebsite(websitesel.value);}
