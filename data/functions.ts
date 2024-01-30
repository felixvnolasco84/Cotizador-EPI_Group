import {
  autosFueraCirculacion,
  columnas,
  equivalenciaArbolesPlantados,
  estados,
  factorDeEmision,
  incrementoanual,
  superficieCuadradaRequerida,
  valores,
} from "./data";

export function obtenerValorTarifa(estado: string, columna: string) {
  const estadoIndex = estados.indexOf(estado);
  const columnaIndex = columnas.indexOf(columna);

  if (estadoIndex !== -1 && columnaIndex !== -1) {
    const res = valores[estadoIndex][columnaIndex];
    return res;
  } else {
    return null; // O alguna otra indicación de valor inválido
  }
}

export function obtenerValorFactorGeneracion(estado: string) {
  const estadoIndex = estados.indexOf(estado);

  if (estadoIndex !== -1) {
    const res = valores[estadoIndex][7];
    return res;
  } else {
    return null; // O alguna otra indicación de valor inválido
  }
}

export function obtenerEnergiaAnual(pagoMensual: number, tarifa: number) {
  return (pagoMensual * 12) / tarifa;
}

export function obtenerValorIncrementoEstimado(tarifa: string) {
  const index = incrementoanual.findIndex(
    (incremento) => incremento.fee === tarifa
  );
  if (index !== -1) {
    return incrementoanual[index].incrementoEstimado;
  } else {
    return null;
  }
}

export function pagoAnualEstimado(
  pagoMensual: number,
  incrementoanual: number
) {
  const pagoAnual = pagoMensual * 12;
  const incrementoAnual = incrementoanual + 1;
  console.log(pagoAnual * incrementoAnual);
  return pagoAnual * incrementoAnual;
}

export function obtenerGeneriaGeneradaAnual(
  factorGeneracion: number,
  numeroPaneles: number,
  potenciaPanel: number
) {
  const result = factorGeneracion * (365 * numeroPaneles * potenciaPanel); 
  return result;
}

export function obtenerOtrosCargos(tarifa: string) {
  const index = incrementoanual.findIndex(
    (incremento) => incremento.fee === tarifa
  );
  if (index !== -1) {
    return incrementoanual[index].otrosCargos;
  } else {
    return null;
  }
}

export function ahorroEstimado(
  generiaGeneradaAnual: number,
  consumoEnergiaAnual: number,
  otrosCargos: number
) {
  return ((generiaGeneradaAnual / consumoEnergiaAnual - otrosCargos) * 100);
}

export function ahorroEstimadoPesos(
  porcentajeAhorro: number,
  pagoAnualEstimado: number 
) { 
  return pagoAnualEstimado * (porcentajeAhorro / 100);
}

export function toneladasMitigadas(energiaAnualGenerada: number) {
  return energiaAnualGenerada * factorDeEmision;
}

export function arbolesPlantados(toneladasMitigadas: number) {
  return toneladasMitigadas * equivalenciaArbolesPlantados;
}

export function autosFueraDeCirculacion(toneladasMitigadas: number) {
  return toneladasMitigadas * autosFueraCirculacion;
}

export function calcularSuperficieRequerida(numeroPaneles: number) {
  return numeroPaneles * superficieCuadradaRequerida;
}
