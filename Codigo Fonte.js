// 1. Validação de senha forte
function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(senha)) {
    throw new Error(
      "A senha deve conter letra maiúscula, minúscula, número e caractere especial."
    );
  }

  return true;
}


// 2. Simulação de verificação em dois fatores (2FA)
function verificar2FA(codigoDigitado, codigoEnviado) {
  if (codigoDigitado !== codigoEnviado) {
    throw new Error("Código de verificação inválido.");
  }

  return true;
}


// 3. Controle de acesso por usuário e telas
const permissoesUsuarios = {
  admin: ["dashboard", "usuarios", "configuracoes"],
  vendedor: ["dashboard", "vendas"],
  suporte: ["dashboard", "tickets"]
};

function verificarAcesso(usuario, tela) {
  const permissoes = permissoesUsuarios[usuario];

  if (!permissoes || !permissoes.includes(tela)) {
    throw new Error("Acesso negado para esta tela.");
  }

  return true;
}


// 4. Verificação básica de vulnerabilidades (exemplo simples)
function verificarVulnerabilidades(dadosEntrada) {
  const padraoSuspeito = /(\<script\>|\-\-|\;|DROP|SELECT)/i;

  if (padraoSuspeito.test(dadosEntrada)) {
    throw new Error("Possível tentativa de ataque detectada.");
  }

  return true;
}


// EXEMPLO DE USO
try {
  validarSenha("Senha@123");
  verificar2FA("123456", "123456");
  verificarAcesso("admin", "usuarios");
  verificarVulnerabilidades("entrada segura");

  console.log("Sistema seguro e acesso permitido.");
} catch (erro) {
  console.error(erro.message);
}