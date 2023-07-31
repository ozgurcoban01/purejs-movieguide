const divid=document.querySelector(".divid")
const logo=document.querySelector(".logo")
logo.addEventListener("click",()=>{
    window.location.href="index.html"
              
})
divid.innerText=parseInt(localStorage.getItem("detailId"))
