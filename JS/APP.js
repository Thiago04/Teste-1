let btnCriarAnimal = document.getElementById("criarAnimal");
btnCriarAnimal.addEventListener("click", () => {
    let nome = document.getElementById("nomeAnimal").value;
    let idade = document.getElementById("idadeAnimal").value;
    let animal = new Animal(nome, idade);
    let animal2 = new Animal(nome, idade);
    exibirDados(animal);
    exibirDados(animal2);
});

function exibirDados(animal2) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `

    <h3>Animal Criado:</h3>
    <p>Nome: ${animal2.nome}</p>
    <p>Idade: ${animal2.idade}</p>
    <p>Som: ${animal2.emitirSom()}</p>
    <p>Corre: ${animal2.correr()}</p>`;
}