const frutas = ["laranja", "limão", "uva"];

const addFrutaNaLista = () => {
  for(let i=0; i < 3; i++){
    const itemLista = document.getElementById(`fruta-${[i+1]}`)
    // console.log(itemLista)
    itemLista.innerHTML = frutas[i]
  }
}

addFrutaNaLista()

const input = document.getElementById("texto")
console.log(input)
const addNovaFruta = () => {
  const areaUl = document.getElementById("lista-de-frutas")
  // console.log(input.value)
  areaUl.innerHTML += `<li>${input.value}</li>`
  input.value = ""
}

