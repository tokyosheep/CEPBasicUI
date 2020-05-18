window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();

    const buttons = Array.from(document.getElementsByClassName("button"));

    buttons.forEach(btn=>{
        btn.addEventListener("click",function(){
            csInterface.evalScript(`saySomething('${this.id}')`);
        });
    });
}