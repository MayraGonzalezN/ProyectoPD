function autora() {
    alert("Esta página fue creada por Mayra Gonzalez   Email:mayragonzalezzn@gmail.com")
}
let toggle=document.getElementById("toggle");
let label_toggle=document.getElementById("toggle");
toggle.addEventListener("change",(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle("dark");
    if (checked==true){
        ojo.src= "./imagen/eye.png";
    }else{
        ojo.src="./imagen/eyeClosed.png";
    }
})
