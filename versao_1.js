//[ok] O usuário deve encontrar uma mensagem de boas vindas no console ao abrir o programaasx//[ok]O usuário deve ser questionado se deseja iniciar uma nova rodada
//[ok] Se o usuário recusar iniciar uma nova rodada, o programa deve imprimir uma mensagem informando o fim do jogo
//[ ] Se o usuário aceitar iniciar uma nova rodada, o programa deve exibir as cartas do jogador e do computador

//const novaRodada = prompt (`Vamos jogar? digite S para sim ou N para não`)

//const cartas = Number["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J" , "Q", "K"]
//const naipes = [`♥️`,`♣️`,`♦️`, `e` ,`♠️`]

alert("Bem vindo ao jogo de BlackJack!");
if (
  confirm("Deseja iniciar uma nova rodada? digite S para sim ou N para não ")
) {
  const jogador = [];
  const computador = [];

  jogador.push(comprarCarta());
  computador.push(comprarCarta());

  alert(
    `Cartas Jogador: ${jogador[0].texto} ${jogador[0].valor} \nCartas Computador: ${computador[0].texto} ${computador[0].valor}`
  );

  if (jogador[0].valor === computador[0].valor) {
    alert(` Empate!!!`);
  } else if (jogador[0].valor > computador[0].valor && jogador[0].valor <= 21) {
    alert(`Jogador ganhou!!!`);
  } else if (
    computador[0].valor > jogador[0].valor &&
    computador[0].valor <= 21
  ) {
    alert(`Computador ganhou!!!`);
  } else {
    alert("Fim de jogo!");
  }
}

// function comprarCarta (cartas, naipes) {

//}

//for(){

// }

//console.log()

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
