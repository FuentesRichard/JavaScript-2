var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    // Mexendo no form
    //pegando minha form
    var form = document.querySelector("#form-adiciona");
    //obtendo paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    //cria a tr e a td
    var pacienteTr =montaTr (paciente);
  
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    console.log(pacienteTr);
});

function obtemPacienteDoFormulario (form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    //Adicionando classe paciente ao meu objeto paciente
    pacienteTr.classList.add("paciente");
    // Colocando td na tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-paciente"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
// criando td
function montaTd(dado, classe) {
 
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    
    return td;
}


