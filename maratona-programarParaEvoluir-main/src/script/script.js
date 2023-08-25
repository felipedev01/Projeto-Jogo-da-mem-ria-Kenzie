let main= document.getElementById("cards")


const novoArray=[...personagens,...personagens]

console.log(novoArray)

const arrayEmbaralhado = embaralharArray(novoArray);


console.log(arrayEmbaralhado)

function RenderizarCartas(){

  for(i=0;i<=arrayEmbaralhado.length;i++){

    let card= document.createElement("img")
    
    card.id=arrayEmbaralhado[i].id

    card.src="./src/img/QuestionBlock.png"

    card.addEventListener("click",clickCarta)
 
    main.appendChild(card)
 
 }

 


}

function clickCarta(event){

  const imgClicada=event.target

  let idClicado=event.target.id

  let personagemClicado= arrayEmbaralhado.find((Element)=>Element.id ==idClicado)

  console.log(personagemClicado)

  console.log(idClicado)

  imgClicada.src=personagemClicado.img
  
}



function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Gera um índice aleatório
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos nas posições i e j
  }

  console.log("Função embaralhar array funcionando!")
  return array;
}

// Exemplo de uso:





console.log(novoArray)
console.log(arrayEmbaralhado)
RenderizarCartas()


