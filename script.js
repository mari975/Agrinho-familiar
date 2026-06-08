function abrirAba(event, id){

const conteudos =
document.querySelectorAll(".conteudo");

const botoes =
document.querySelectorAll(".tab-btn");

conteudos.forEach(conteudo=>{
conteudo.classList.remove("active");
});

botoes.forEach(botao=>{
botao.classList.remove("active");
});

document
.getElementById(id)
.classList.add("active");

event.currentTarget
.classList.add("active");
}

document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso!");

this.reset();

});
