import { columnas, estados, incrementoanual, valores } from "./data";

export function obtenerValorTarifa(estado: string, columna: string) {
  const estadoIndex = estados.indexOf(estado);
  const columnaIndex = columnas.indexOf(columna);

  if (estadoIndex !== -1 && columnaIndex !== -1) {
    return valores[estadoIndex][columnaIndex];
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

  return pagoAnual * incrementoanual;
}
