const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você, após assistir um filme, reflete sobre a atual situação do meio ambiente e analisa as consequências",
        alternativas: [
            {
                texto: "Isso é terrível!",
                afitmacao: "Inicialmente você se sente angustiado e incerto sobre o futuro"
            },
            {
                texto:"Isso é normal",
                afirmacao: "Para você pouco importa, a rotina fixa é mais importante"
            }   
            
        ]
    },
    {
        enunciado: "Analisando o caos ambiental e o alerta para a causa climática, você:",
        alternativas: [
            {
                texto: "Procura conscientizar as pessoas mais próximas",
                afirmacao: "As pessoas ouvem com atenção, contudo o caminho não será fácil!"
            },
            {
                texto: "Insiste em acreditar que não irá te afetar",
                afirmacao: "Opta mais uma vez pelo caminho do negacionismo"
            }   
            
            
        ]
    },
    {
        enunciado: "Um amigo seu te manda mensagem sobre um trabalho escolar, o qual será um debate sobre a causa ambiental, você propõe:",
        alternativas: [
            {
                texto: "Procura defender a causa climática com argumentos interessantes e dados reais",
                afitmacao: "Seu desempenho no debate é admirável"
            },
            {
                texto: "Procura negar a causa climática com argumentos interessantes e dados reais",
                afirmacao: "Seu desempenho no debate é questionável, e você não agrada a turma"
            }   


        
        ]
    },
    {
        enunciado: "No dia seguinte você acorda com sua casa coberta de fumaça devido a uma queimada próxima. Você vê com seus próprios olhos a destruição do planeta!",
        alternativas: [

            {
                texto: "Você imediatamente liga para os bombeiros apagarem o incêndio e começa uma campanha social em seu bairro para a causa ambiental",
                afitmacao: "Dezenas de pessoas se juntam na campanha, que chega na cidade inteira e começa a região"
            },
            {
                texto: "Você deixa aquilo passar e colabora para a destruição do planeta e da própria vida.",
                afirmacao: "O planeta segue sendo destruído e seu bairro é frequentemente invadido pela fumaça de queimadas próximas"
            }   
            
            
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
 
}

function mostraResultado(){
    caixaPerguntas.textContent = "Dias depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();