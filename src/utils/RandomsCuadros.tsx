import { Cuadros } from "./tipos"

export function RandomsCuadros( cuadros :Cuadros[] | null){
  let obrasRandom: Cuadros[] =[]
  let numbersObras : Set<number> = new Set()
  if (cuadros) {
    while (numbersObras. size < 4) {    
      const randomNumber = Math.floor(Math.random() * cuadros.length)
      if(!numbersObras.has(randomNumber)){
        numbersObras.add(randomNumber)
        let obraEncontrada = cuadros.find(cuadro => cuadro.id === String(randomNumber))

        if (obraEncontrada) {
          obrasRandom.push(obraEncontrada)
        }
      }
    }
  }
  return { obrasRandom }
}
