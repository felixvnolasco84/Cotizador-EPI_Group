// Número de páneles requeridos:

function calcularResultado(
  D11: any,
  D6: any,
  P38: any,
  P41: any,
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
  const resultado = Math.min(
    P41,
    Math.floor(D11 / (365 * valorCondicional * P38))
  );

  return resultado;
}

const datosPanelesSolares2 = [
  { "Columna de Búsqueda": "valor_buscado", "Columna de Resultados": 0.1 },
];

const D11 = 10000;
const D6 = "valor_buscado";
const P38 = 0.9;
const P41 = 5000;

const resultado3 = calcularResultado(D11, D6, P38, P41, datosPanelesSolares1);
