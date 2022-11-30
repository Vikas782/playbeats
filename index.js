// ......................language page javascript...........................
let url = new URL(window.location.href);
let pathname=url.pathname
let arr1=pathname.split("/")

if(arr1[2]=="language.html"){
let checkedInput = document.querySelectorAll("input[type=checkbox]")
let selectLanguage = document.getElementsByTagName("h6");
let count = 1;
checkedInput.forEach((element) => {
    element.addEventListener("click", function () {
        if (element.checked == true) {
            count++;
            selectLanguage[0].innerHTML = `${count} Selected`
        }
        else {
            count--;
            selectLanguage[0].innerHTML = `${count} Selected`
        }
    })
});

let dialog = document.querySelector("dialog");
let container = document.querySelector(".container");
let cancelDialog = document.getElementById("cancel");
let login = document.getElementById("login");

if(document.cookie!= `username=user`) {
    setTimeout(function () {
        dialog.style.display = "block"
        container.style.visibility = "hidden"
    }, 3000)
}


cancelDialog.addEventListener("click", function () {
    document.cookie = `username=user`
    dialog.style.display = "none";
    container.style.visibility = "visible";

})

login.addEventListener("click", function () {
    dialog.style.display = "none";
    container.style.visibility = "visible";
    window.location.href = "http://127.0.0.1:5500/playbeats/signIn.html#";
})

}

//......................SignIn page javascript.............................

if(arr1[2]=="signIn.html"){

let emailInput=document.getElementById("exampleInputEmail1")
let password=document.getElementById("exampleInputPassword1")
function login()
{
    let user={
        username:emailInput.value.trim(),
        password:password.value.trim()
    }

      

    document.cookie = `person=${emailInput.value.trim()}`
    localStorage.setItem(`${emailInput.value.trim()}`, JSON.stringify(user));
}
}


//.....................Home Page javascript...............................
if(arr1[2]=="Home.html"){
 

let userName=document.querySelector("#userName");
    var re = new RegExp("person" + "=([^;]+)");

    // console.log(document.cookie, re);
    let v="person=vikas"
    var value = re.exec(v);
    console.log(value);
    userName.innerText=` welcome ${value[1]} !`;
    //console.log(getCookie("vikas"));

    
}