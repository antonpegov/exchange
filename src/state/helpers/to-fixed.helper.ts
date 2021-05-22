export const toFixed = (value: number | string) => {
  
  return (Math.round(+value * 100)/100).toFixed(2) 
}