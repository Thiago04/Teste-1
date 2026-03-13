// Segurança e controle de acesso em JavaScript

//teste para ver o pull

// Dependências
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");
const validator = require("validator");

// Configurações
const SALT_ROUNDS = 10;
const JWT_SECRET = "segredo_super_seguro";

// -------------------------------
// 1. Validação de senha forte
// -------------------------------
function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(senha)) {
    throw new Error(
      "Senha deve ter no mínimo 8 caracteres, letra maiúscula, minúscula, número e caractere especial."
    );
  }
}

// -------------------------------
// 2. Criar senha com hash seguro
// -------------------------------
async function criarSenhaHash(senha) {
  validarSenha(senha);
  const hash = await bcrypt.hash(senha, SALT_ROUNDS);
  return hash;
}

// -------------------------------
// 3. Verificar login
// -------------------------------
async function verificarLogin(senhaDigitada, hashSalvo) {
  const senhaValida = await bcrypt.compare(senhaDigitada, hashSalvo);

  if (!senhaValida) {
    throw new Error("Senha inválida");
  }

  return true;
}

// -------------------------------
// 4. Gerar Token JWT
// -------------------------------
function gerarToken(usuario) {
  return jwt.sign(
    {
      id: usuario.id,
      role: usuario.role
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

// -------------------------------
// 5. Controle de acesso por roles
// -------------------------------
const permissoes = {
  admin: ["dashboard", "usuarios", "configuracoes"],
  vendedor: ["dashboard", "vendas"],
  suporte: ["dashboard", "tickets"]
};

function verificarAcesso(role, tela) {
  if (!permissoes[role] || !permissoes[role].includes(tela)) {
    throw new Error("Acesso negado");
  }
}

// -------------------------------
// 6. Criar segredo para 2FA
// -------------------------------
function gerar2FA() {
  const secret = speakeasy.generateSecret({
    length: 20
  });

  return secret.base32;
}

// -------------------------------
// 7. Verificar código 2FA
// -------------------------------
function verificar2FA(token, secret) {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: "base32",
    token: token,
    window: 1
  });
}

// -------------------------------
// 8. Sanitização de entrada
// -------------------------------
function validarEntrada(input) {
  if (!validator.escape(input)) {
    throw new Error("Entrada inválida detectada.");
  }

  return true;
}

// -------------------------------
// Exemplo de uso
// -------------------------------
(async () => {

  const senha = "Senha@123";
  const hash = await criarSenhaHash(senha);

  await verificarLogin("Senha@123", hash);

  const usuario = {
    id: 1,
    role: "admin"
  };

  verificarAcesso(usuario.role, "usuarios");

  const token = gerarToken(usuario);

  console.log("Login autorizado");
  console.log("Token:", token);

})();
