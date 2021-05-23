export const toFixed = (value: number | string): number => {
  
  return (Math.round(+value * 100)/100)
}