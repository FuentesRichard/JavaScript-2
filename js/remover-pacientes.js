var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    //alvo do evento é event.target
    //pai do evento é event.target.parentNodepare
    event.target.parentNode.classList.add("fadeOut");
    
    //A função espera 500ms para executar
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
