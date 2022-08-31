var numSort = []
var numEsco = []

function sortearNumeros(){

 for (let i = 0; i < 6; i++){
      let num = Math.ceil(Math.random() *60) 
      console.log(num)
 if(!numSort.includes(num) == false){
    numSort[i] = num
 } else {
    i = i - 1;    
 }

 }
    console.log(numSort)
    document.getElementById("sorteados").innerHTML = numSort;
    contarAcertos()
}

function lerNumero(value, pos){
    if (value < 1 ){
        alert("Número não poder ser menor que 1.")
    } else if (value > 60){
        alert("Número não pode ser maior que 60.")
    }else if (numEsco.includes(value)){
        alert("Número repetido. Digite novamente.")
    } else{
        numEsco[pos] = value
        console.log(numEsco)
    }
}

function contarAcertos(){
    let cont = 0;
    numEsco.forEach(function(value, index){
            if(numSort.includes(value)){
                cont++;
            }
    })
    document.getElementById("acertos").innerHTML = cont;
}