export const repeatElement = (element, count) =>
    Array(count).fill(element)


export function formatPrice(pln) {
    return `${(pln / 1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} zł`;
}
      
export function priceToString(pln) {
    return `${(pln / 1).toFixed(2)}`;
}