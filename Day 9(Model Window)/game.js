let showbtn=document.querySelectorAll(".show")
let model=document.querySelector(".model")
let closebtn=document.querySelector(".close")
let overlay=document.querySelector(".overlay")

function show() {
    model.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

let close=()=>{
    model.classList.add("hidden")
     overlay.classList.add("hidden")
}


for (let i = 0; i < showbtn.length; i++) {
    showbtn[i].addEventListener('click', function() {
        show();
    });

  
}
  closebtn.addEventListener('click', function() {
        close();
    });

    

    document.addEventListener('keydown', function(e){
       
     if(e.key=='Escape'){
        if(!model.classList.contains('hidden')){
            close()
        }
     }
    })
