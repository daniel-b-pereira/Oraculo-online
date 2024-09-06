function gerarSequenciaAleatoria() {
  const numeros = [];

  // Garantindo que os números sejam únicos
  while (numeros.length < 3) {
    const numeroAleatorio = Math.floor(Math.random() * 22);
    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio);
    }
  }

  return numeros;
}

// Exemplo de uso:
const sequencia = gerarSequenciaAleatoria();
console.log(sequencia);

let saibaMais = '';


function pesquisar() {


    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Gera a sequência de índices aleatórios
    const sequencia = gerarSequenciaAleatoria();

    
    // Itera sobre os índices da sequência
    for (let indice of sequencia) {
      const dado = arcanosMaiores[indice];
  
      // Cria um novo elemento HTML para cada resultado
      resultados += `
        <div class="item-resultado">
                <h2>
                    ${dado.nome}
                </h2>
                <p class="descricao-meta">Nome: ${dado.nome}</p>
                <p class="descricao-meta">Número: ${dado.numero}</p>
                <p class="descricao-meta">Descrição: ${dado.descricao}</p>
                <p class="descricao-meta">Elemento: ${dado.elemento}</p>
                <p class="descricao-meta">Significado: ${dado.significado}</p>
                <p class="descricao-meta">Interpretaçoes: ${dado.interpretacoes}</p>
                
            </div>
      `;
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    
    // Cria um novo elemento para a mensagem
    let mensagem = document.createElement("p");
    mensagem.innerHTML = "Para resultados mais específicos, utilize o Gemini para correlacionar as cartas encontradas com sua pergunta.<br> <br> <br> ";

    // Adiciona o elemento à seção de resultados
    section.appendChild(mensagem);
  }