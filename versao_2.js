


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


    alert(`Olá, Bem vindo ao jogo BlackJack!`);
    let novoJogo = confirm(`Deseja iniciar um novo Jogo? Ok para sim ou Cancelar para não`);
   
    if (novoJogo) {
     
      let jogador = prompt("Olá, digite o nome do jogador para continuar:");
      let pontuacaoJogador = [];
      let pontuacaoComputador = [];
    
      let somaJogador = 0;
      let somaComputador = 0;
    
      let puxaCarta = confirm(`Puxe uma carta para começar:`);
      let rodada = 0;
      
      while (puxaCarta === true) {
      
        pontuacaoJogador.push(comprarCarta()); 
        pontuacaoComputador.push(comprarCarta());
        alert(
          `Cartas puxadas:\n ${jogador}: ${pontuacaoJogador[rodada].texto} ${pontuacaoJogador[rodada].valor}\nComputador: ${pontuacaoComputador[rodada].texto} ${pontuacaoComputador[rodada].valor}`
        );
       
        somaJogador += pontuacaoJogador[rodada].valor; 
        somaComputador += pontuacaoComputador[rodada].valor; 

        alert(
          `TOTAL DE PONTOS: RODADA: ${
            rodada + 1
          }\n${jogador}: ${somaJogador} Pontos\nCOMPUTADOR: ${somaComputador} Pontos`
        );
     
        rodada++; 
        if (somaJogador > 21) {
          
          puxaCarta = false;
        } else if (somaComputador > 21) {
          puxaCarta = false;
        } else if (somaJogador === 21) {
          puxaCarta = false;
        } else if (somaComputador === 21) {
          puxaCarta = false;
        } else {
          puxaCarta = confirm(`Deseja Puxar mais uma carta?`);
        }
      } 
     
      if (somaJogador === 21 && somaJogador > somaComputador && somaJogador <= 21) {
        alert(`Parabéns ${jogador} Você ganhou com ${somaJogador} Pontos!`);
        alert(`Para iniciar um novo jogo Atualize esta pagina`);
        placarUsuario += 1;
      } else if (
        somaComputador === 21 &&
        somaComputador > somaJogador &&
        somaComputador <= 21
      ) {
        alert(`O Computador ganhou com ${somaComputador} Pontos! Não foi dessa vez!`);
        alert(`Para iniciar um novo jogo Atualize esta pagina`);
        placarComputador += 1;
      } else if (somaJogador > 21 && somaComputador > 21) {
        alert(`Ambos Ultrapassaram 21 pontos. Ninguem ganhou =( !`);
      } else if (somaComputador > 21) {
        alert(
          `Parabéns ${jogador} Você ganhou com ${somaJogador} Pontos\nE o Computador marcou: ${somaComputador} Pontos!`
        );
        placarJogador += 1;
      } else if (somaJogador > 21) {
        alert(
          `O Computador ganhou com ${somaComputador} Pontos! Tente novamente!\nE ${jogador} marcou: ${somaJogador} Pontos!`
        );
        placarComputador += 1;
      } else if (somaJogador === 21 && somaComputador === 21) {
        alert(`EMPATE!`);
      }else if((somaJogador > somaComputador) && (somaJogador <= 21)){
         alert( `Parabéns você ganhou!`)
      }else if((somaComputador > somaJogador) && (somaComputador <= 21)){
         alert( `O Computador ganhou! Não desista!`)

      }
    } else {
      
      alert(`Você escolheu Cancelar voce saiu do jogo\nPara iniciar um novo Jogo atualize esta pagina!`);
    }