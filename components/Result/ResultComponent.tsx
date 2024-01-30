import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

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
    <div className={`${manrope.className} flex flex-col gap-4`}>
      <div className="flex flex-col gap-2">
        <p>
          <strong>Su situación Actual:</strong>{" "}
          {`El proximo año consumirá cerca de ${energiaAnual.toLocaleString(
            "es-MX",
            { maximumFractionDigits: 2 }
          )} kWh, equivalente a $${pagoAnual.toLocaleString("es-MX")} pesos`}
        </p>
        <p>
          <strong>Su solución:</strong>{" "}
          {`Un sistema de ${panelesRequeridos.toLocaleString("es-MX", {
            maximumFractionDigits: 0,
          })} paneles puede darle ${ahorroEstimadoPorcentaje.toLocaleString(
            "es-MX",
            { maximumFractionDigits: 2 }
          )}% de ahorro, equivalente a ${ahorroEstimadoDinero.toLocaleString(
            "es-MX",
            {
              style: "currency",
              currency: "MXN",
            }
          )} en el primer año.`}
        </p>
        <p>
          <strong>Su impacto ambiental:</strong>{" "}
          {` Contribuira a mitigar ${Math.ceil(
            numeroToneladasMitigadas
          )} toneladas de CO2e, equivalentes a plantar ${Math.ceil(
            numeroArbolesPlantados
          )} arboles adultos o sacar de circulacion ${Math.ceil(
            numeroAutosFueraCirculacion
          )} autos deportivos.`}
        </p>
        <p>
          <strong>Siguientes pasos:</strong>{" "}
          {` Su sistema preliminar requiere una superficie de ${Math.ceil(
            superficieRequerida
          )} m2 y tendra un retorno de inversion aproximado de X años.`}
        </p>
        <p>
          Para optimizar su propuesta y ajustarnos a los requerimientos de su
          ubicación, ofrecemos realizar una visita de sitio sin costo alguno
          para su empresa.
        </p>
      </div>
      <strong>
        <small>
          Nota: Los resultados mostrados son aproximaciones y su fin es
          orientativo. Estas estimaciones pueden variar una vez se haga un
          estudio detallado del sitio.
        </small>
      </strong>
    </div>
  );
}
