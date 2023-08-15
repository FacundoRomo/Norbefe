import { Cuadros, Filters } from "./tipos";

export function getMinMaxPrices (cuadros: Cuadros[]): Filters {
    let minPrice = cuadros[0].price
    let maxPrice = cuadros[0].price
  
    for (const cuadro of cuadros) {
      if (cuadro.price < minPrice) {
        minPrice = cuadro.price;
      }
      if (cuadro.price > maxPrice) {
        maxPrice = cuadro.price;
      }
    }
    return {minPrice, maxPrice};
  }