var container=document.querySelector(".para");
var btn=document.querySelector(".create");
var notes=document.querySelectorAll(".input");

function show(){
    container.innerHTML=localStorage.getItem("note");
}
show();

function updatestorage(){
    localStorage.setItem("note",container.innerHTML);
}

btn.addEventListener("click",()=>{
    var inputbox=document.createElement("p");
    var img=document.createElement("img");
    inputbox.className="input";
    inputbox.setAttribute("contenteditable","true");
    img.src="delete.png";
    container.appendChild(inputbox).appendChild(img)
})

container.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatestorage();
            }
        });
    }
})
