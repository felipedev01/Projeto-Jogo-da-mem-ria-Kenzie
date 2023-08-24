let main= document.getElementById("cards")


function RenderizarCartas(){

  for(i=0;i<=7;i++){

    let card= document.createElement("img")

    card.src="./src/img/QuestionBlock.png"
 
    main.appendChild(card)
 
 }


}

RenderizarCartas()


