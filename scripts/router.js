var userName = "";
var password = "";
var counter = 1;

validateLogin = function(){
    userName = document.querySelector("#username").value;
    password = document.querySelector("[name='password']").value;
    if(userName==="siliconbrains" && password==="Student@123"){
        window.location.href="portal.html";
    }else{
        alert("Incorrect login credentials");
    }
}

createStudentData = function(event){
    event.preventDefault();
    var firstName = document.querySelector('#fname').value;
    var lastName = document.querySelector('#lname').value;
    var email = document.querySelector("[name='studentEmail']").value;
    var age = document.querySelector('#age').value;
    var qualification = document.querySelector('#qualification').value;
    var gender = document.querySelector("[name='gender']").value;
    id = document.createElement("td");
    id.innerText = counter++;
    fname = document.createElement("td");
    fname.innerText = firstName;
    lname = document.createElement("td");
    lname.innerText = lastName;
    mail = document.createElement("td");
    mail.innerText = email;
    ag = document.createElement("td");
    ag.innerText = age;
    qual = document.createElement("td");
    qual.innerText = qualification;
    gen = document.createElement("td");
    gen.innerText = gender;
    row = document.createElement("tr");
    row.appendChild(id);
    row.appendChild(fname);
    row.appendChild(lname);
    row.appendChild(mail);
    row.appendChild(ag);
    row.appendChild(qual);
    row.appendChild(gen);
    document.querySelector(".table >tbody").appendChild(row);
}