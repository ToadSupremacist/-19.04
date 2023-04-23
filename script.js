let danger = document.querySelector(".btn-danger");
let ledselect = document.querySelector(".led").children;

danger.addEventListener("click", ()=>{
    document.body.classList.toggle("froggert-mode");
});

for (i of ledselect){
    i.addEventListener("change", (event)=>{
        let color = event.target.value;
        document.body.style.backgroundColor = color;
    })
}