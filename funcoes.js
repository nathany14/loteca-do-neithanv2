var numSort = []
var numEsco = []

function sortearNumeros(){

 for (let i = 0; i < 6; i++){
      let num = Math.ceil(Math.random() *60) 
      console.log(num)
 if(!numSort.includes(num) ){
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
    let num = Number (value)
    if (num < 1 ){
        alert("Número não poder ser menor que 1.")
    } else if (num > 60){
        alert("Número não pode ser maior que 60.")
    }else if (numEsco.includes(num)){
        alert("Número repetido. Digite novamente.")
    } else{
        numEsco[pos] = num
        console.log(numEsco)
    }
}

function contarAcertos(){
    let cont = 0;
    numEsco.forEach(function(value, index){
            if(numSort.includes(value)){
                cont = cont + 1;
            }
    })
    document.getElementById("acertos").innerHTML = cont;
}