let usuario = "Thiago";
let senha = "12";

// Determina qual é o problema
let status;

if (usuario !== "Thiago" && senha !== "12345") {
    status = "ambos_incorretos";
} else if (usuario !== "Thiago") {
    status = "usuario_incorreto";
} else if (senha !== "12345") {
    status = "senha_incorreta";
} else {
    status = "sucesso";
}

// Switch age sobre um valor fixo e claro
switch (status) {
    case "sucesso":
        console.log("Login bem-sucedido!");
        break;
    case "usuario_incorreto":
        console.log("Usuário incorreto.");
        break;
    case "senha_incorreta":
        console.log("Senha incorreta.");
        break;
    case "ambos_incorretos":
        console.log("Usuário e senha incorretos.");
        break;
    default:
        console.log("Erro desconhecido.");
        break;
}