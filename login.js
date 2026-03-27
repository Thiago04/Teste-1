let usuario = "Laura";
let senha = "12";        

let true;

switch (true) {
    case (usuario === "Thiago" && senha === "12345"):
        console.log("Login bem-sucedido!");
        break;
    case (usuario !== "Thiago"):
        console.log("Usuário incorreto.");
        break; 
        case (senha !== "12345"):
        console.log("Senha incorreta.");
        break;
        case (usuario !== "Thiago" && senha !== "12345"):
        console.log("Login falhou.");
        break;  
    default:
        console.log("Login falhou.");
        break;
}

/*if (usuario === "Thiago" && senha === "12345") {
    console.log("Login bem-sucedido!");
} else if (usuario !== "thiago") {
    console.log("Usuário incorreto.");
} else if (senha !== "12345") {
    console.log("Senha incorreta.");
}   else {
    console.log("Login falhou.");       
}*/

