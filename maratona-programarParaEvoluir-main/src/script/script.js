let main= document.getElementById("cards")
let span=document.getElementById("Pontos")

let pontuacao=span.innerText
const novoArray=[...personagens,...personagens]



const arrayEmbaralhado = embaralharArray(novoArray);




function RenderizarCartas(){

  for(i=0;i<=arrayEmbaralhado.length;i++){

    let card= document.createElement("img")
    
    card.id=arrayEmbaralhado[i].id

    card.src="./src/img/QuestionBlock.png"

    card.addEventListener("click",clickCarta)
 
    main.appendChild(card)
 
 }

 


}

let click1=null;
let click2=null;
let pontos=0;

function clickCarta(event){


  


  const imgClicada=event.target

  let idClicado=event.target.id

  let personagemClicado= arrayEmbaralhado.find((Element)=>Element.id ==idClicado)

  

  

  imgClicada.src=personagemClicado.img

  if(click1==null ){

    click1=imgClicada
 }else if(click2==null){
   click2=imgClicada
   testPar()
 
   setTimeout(() => {
    
   
     click1.src="./src/img/QuestionBlock.png"
     click2.src="./src/img/QuestionBlock.png"

     click1=null;
     click2=null;
    
  }, "1000");
 }

 
  
}


function testPar(){

  if(click1.id==click2.id){

    alert("Você acertou!")
    pontos=pontos+1
    span.innerHTML=pontos
  }else{

    alert("Você errou!")

  }


  

  
}
click1=null;
click2=null;


function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Gera um índice aleatório
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos nas posições i e j
  }

  
  return array;
}

// Exemplo de uso:






RenderizarCartas()


