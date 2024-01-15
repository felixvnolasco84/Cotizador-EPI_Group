// Pago anual estimado:
function calcularProduccionDiaria(
  energiaAnual: any,
  factorGeneracion: any,
  potenciaPanel: any
) {
  // Paso 1: Divide la energía anual por 365 días
  const energiaDiaria = energiaAnual / 365;

  // Paso 2: Divide la energía diaria por el factor de generación del estado correspondiente
  const energiaGenerada = energiaDiaria / factorGeneracion;

  // Paso 3: Divide el resultado por la potencia de cada panel
  const produccionDiaria = energiaGenerada / potenciaPanel;

  return produccionDiaria;
}

// Ejemplo de uso:
const energiaAnual = 1000000;
const factorGeneracion = 0.85;
const potenciaPanel = 300;

const resultado1 = calcularProduccionDiaria(
  energiaAnual,
  factorGeneracion,
  potenciaPanel
);

console.log(resultado);
