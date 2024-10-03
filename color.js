const buttons=document.querySelectorAll(".button");
//console.log(buttons);

const body=document.querySelector("body");

buttons.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
    //console.log(e.target.id);
    if(e.target.id==="red"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="blue"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="yellow"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="black"){
        body.style.backgroundColor=e.target.id;
    }  
    })
    
})