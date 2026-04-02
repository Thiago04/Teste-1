let temperatura    = 25;  // Temperatura inicial em °C
let NovaTemperatura = 15;   // Variável para armazenar a nova temperatura após ajuste    
const limiteMinimo = 15;  // Limite mínimo de temperatura
const limiteMaximo = 30;  // Limite máximo de temperatura
const aumentarGraus = 5;  // Quantidade de graus para aumentar
const diminuirGraus = 5;  // Quantidade de graus para diminuir

// ─── Troque o número da opção aqui ───────────────────────────
let opcao = "2";  // 1 = aumentar | 2 = diminuir | 3 = ver temp | 4 = sair
// ─────────────────────────────────────────────────────────────

console.log("Sistema iniciado. Temperatura inicial: " + temperatura + "°C");

switch (opcao) {

  case "1":
    temperatura = temperatura + NovaTemperatura;;          
    console.log("Temperatura aumentada. Agora está em " + temperatura + "°C");
    if (temperatura > limiteMaximo) {
      console.log("AVISO: temperatura acima de " + limiteMaximo + "°C!");
    }
    break;

  case "2":
    temperatura = temperatura - NovaTemperatura;
    console.log("Temperatura diminuída. Agora está em " + temperatura + "°C");
    if (temperatura < limiteMinimo) {
      console.log("AVISO DE RISCO: temperatura abaixo de " + limiteMinimo + "°C!");
    }
    break;

  case "3":
    console.log("Temperatura atual: " + temperatura + "°C");
    if (temperatura < limiteMinimo) {
      console.log("AVISO DE RISCO: temperatura abaixo de " + limiteMinimo + "°C!");
    } else if (temperatura > limiteMaximo) {
      console.log("AVISO: temperatura acima de " + limiteMaximo + "°C!");
    } else {
      console.log("Temperatura normal.");
    }
    break;

  case "4":
    console.log("Temperatura atual: " + temperatura + "°C");
    console.log("Saindo do sistema...");
    break;

  default:
    console.log("Opção inválida. Use 1, 2, 3 ou 4.");
    break;
}