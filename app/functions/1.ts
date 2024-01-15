// Consumo de energía anual:

function calcularValor(
  pago_mensual: any,
  state: any,
  datosPanelesSolares: any
) {
  // Filtrar el array de objetos basado en la búsqueda de 'BUSCARV'
  const filtro = datosPanelesSolares.filter(
    (item: any) => item["Columna de Búsqueda"] === state
  );

  // Obtener el valor correspondiente basado en la condición IFS
  const valorCondicional = filtro[0]["Columna de Resultados"];

  // Calcular el resultado final
  const resultado = (12 * pago_mensual) / valorCondicional;

  return resultado;
}

const datosPanelesSolares1 = [
  { "Columna de Búsqueda": "valor_a_buscar", "Columna de Resultados": 2 },
];

const resultado = calcularValor(12, "valor_a_buscar", datosPanelesSolares1);
