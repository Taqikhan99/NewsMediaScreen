const togglebtn=document.getElementsByClassName("togglebtn")[0]
const navlinks =document.getElementsByClassName("navlinks")[0]

togglebtn.addEventListener('click',()=>{
    navlinks.classList.toggle("active");
})