function Caracteres(texto) {
    const contagem = {};
    for (const caractere of texto) {
      contagem[caractere] = (contagem[caractere] || 0) + 1;
    }
    return contagem;
  }
  
  const texto = "banana";
  const resultado = Caracteres(texto);
  console.log(resultado);