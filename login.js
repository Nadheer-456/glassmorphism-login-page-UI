const input=document.getElementById("password");
const toggle=document.getElementById("togglepassword");
toggle.addEventListener("click", ()=> {
    const ispassword = input.type === "password";
    input.type = ispassword ? "text" : "password";
    toggle.classList.toggle("ri-eye-off-fill");
    toggle.classList.toggle("ri-eye-fill");
});