const verificarPrimo = (n) => {
  for (let i = 2; i < n; i++) if (n % i === 0) return "Não é primo";
  return "É primo";
}

console.log(verificarPrimo(7));