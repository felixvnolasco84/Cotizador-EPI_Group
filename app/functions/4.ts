// Energía generada anual:

function calcularResultado1(
  D6: any,
  D14: any,
  P38: any,
  datosPanelesSolares: any
) {
  // Buscar el valor en 'Datos y Fórmulas Paneles Solares'!D6
  const valorBuscado = D6;

  // Filtrar el array de objetos basado en la búsqueda de 'BUSCARV'
  const filtro = datosPanelesSolares.filter(
    (item: any) => item["Columna de Búsqueda"] === valorBuscado
  );

  // Obtener el valor correspondiente basado en la condición BUSCARV
  const valorCondicional =
    filtro.length > 0 ? filtro[0]["Columna de Resultados"] : 0;

  // Calcular el resultado final
  const resultado = valorCondicional * 365 * D14 * P38;

  return resultado;
}

const datosPanelesSolares = [
  { "Columna de Búsqueda": "valor_buscado", "Columna de Resultados": 0.1 },
];

const D61 = "valor_buscado";
const D14 = 100;
const P381 = 0.9;

const resultado4 = calcularResultado1(D6, D14, P38, datosPanelesSolares);

console.log(resultado);
