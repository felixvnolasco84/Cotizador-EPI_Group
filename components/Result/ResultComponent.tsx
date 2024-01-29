import { Manrope } from "next/font/google";

export default function ResultComponent({ quote }: { quote: any }) {
  const {
    energiaAnual,
    pagoAnual,
    panelesRequeridos,
    generacionAnual,
    ahorroEstimadoPorcentaje,
    ahorroEstimadoDinero,
    numeroToneladasMitigadas,
    numeroArbolesPlantados,
    numeroAutosFueraCirculacion,
    superficieRequerida,
  } = quote;
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>{`Su situación Actual: El proximo año consumirá cerca de ${Math.ceil(energiaAnual)} kWh, equivalente a $${pagoAnual.toLocaleString("es-MX")} pesos`}</p>
        <p>{`Su solución: Un sistema de ${Math.ceil(panelesRequeridos)} paneles puede darle ${ahorroEstimadoPorcentaje}% de ahorro, equivalente a $${Math.ceil(ahorroEstimadoDinero)} en el primer año.`}</p>
        <p>{`Su impacto ambiental: Contribuira a mitigar ${Math.ceil(numeroToneladasMitigadas)} toneladas de CO2e, equivalentes a plantar ${Math.ceil(numeroArbolesPlantados)} arboles adultos o sacar de circulacion ${Math.ceil(numeroAutosFueraCirculacion)} autos deportivos.`}</p>
        <p>{`Siguientes pasos: Su sistema preliminar requiere una superficie de ${Math.ceil(superficieRequerida)} m2 y tendra un retorno de inversion aproximado de X años.`}</p>
        <p>
          Para optimizar su propuesta y ajustarnos a los requerimientos de su
          ubicación, ofrecemos realizar una visita de sitio sin costo alguno
          para su empresa.
        </p>
      </div>
      <small>
        Nota: Los resultados mostrados son aproximaciones y su fin es
        orientativo. Estas estimaciones pueden variar una vez se haga un estudio
        detallado del sitio.
      </small>
    </div>
  );
}
