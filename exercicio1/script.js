let pergunta = prompt("Deseja comer mais coxinha?").toUpperCase()
let conta = 0
const preco = 2.50

while(pergunta !== "N"){
    if(pergunta === "S"){
        conta += preco
        pergunta = prompt("Deseja comer mais coxinha?").toUpperCase()
    }else{
        alert("Insira Sim ou Não")
        pergunta = prompt("Deseja comer mais coxinha?").toUpperCase()
    }
}
console.log(`O total da conta é de: ${conta}`)



