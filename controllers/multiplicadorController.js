exports.multiplicar = (req, res) => {
  const multiplicador = req.params.multiplicador;
  const arrayNumeros = req.body.arreglo;

  let nuevoArreglo = [];
  for (let i = 0; i < arrayNumeros.length; i++) {
    nuevoArreglo.push(arrayNumeros[i] * multiplicador);
  }

  res.status(200).json({
    status: "success",
    data: {
      arreglo: nuevoArreglo
    },
  });
};