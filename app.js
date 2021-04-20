

const key = document.getElementById("key")
const code = document.getElementById("code")
const which = document.getElementById("which")

document.addEventListener("keypress", (event) =>{
    key.innerHTML= event.key
    code.innerHTML= event.code
    which.innerHTML= event.which

    console.log(event.key)
    console.log(event.code)
    console.log(event.which)    
});