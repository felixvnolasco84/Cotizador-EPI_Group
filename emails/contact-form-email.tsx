interface ContactFormData {
  name: string;
  company: string;
  state: string;
  moneyMonthSpent: number;
  feeType: string;
  phoneNumber: string;
  email: string;
  energiaAnual: number;
  pagoAnual: number;
  panelesRequeridos: number;
  generacionAnual: number;
  ahorroEstimadoPorcentaje: number;
  ahorroEstimadoDinero: number;
  numeroToneladasMitigadas: number;
  numeroArbolesPlantados: number;
  numeroAutosFueraCirculacion: number;
  superficieRequerida: number;
}

export const ContactFormEmail = ({
  name,
  company,
  state,
  moneyMonthSpent,
  feeType,
  phoneNumber,
  email,
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
}: ContactFormData) => {
  function formatPercentage(amount: number) {
    return amount.toLocaleString("es-MX", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function formatMoney(amount: number) {
    return amount.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
  }

  function roundCeiling(amount: number) {
    return Math.ceil(amount);
  }  

  return (
    <div>
      <h1>Nuevo Contacto | Cotizador EPI</h1>
      <h2>Tipo de cotización: Paneles Solares</h2>
      <p>
        Compañia: <strong>{company}</strong>
      </p>
      <p>Estado: {state}</p>
      <p>Pago Mensual: {formatMoney(moneyMonthSpent)}</p>
      <p>Tarifa: {feeType}</p>
      <br />

      <p>
        <strong>Datos Calculados</strong>
      </p>
      <p>Consumo de energía anual: {energiaAnual.toLocaleString("es-MX")}</p>
      <p>Pago anual estimado: {formatMoney(pagoAnual)}</p>
      <br />

      <p>Número de páneles requeridos: {roundCeiling(panelesRequeridos)}</p>
      <p>Energía generada anual: {generacionAnual.toLocaleString("es-MX")}</p>
      <p>
        Ahorro estimado en porcentaje:{" "}
        {formatPercentage(ahorroEstimadoPorcentaje)}
      </p>
      <p>Ahorro estimado en pesos: {formatMoney(ahorroEstimadoDinero)}</p>
      <br />

      <p>
        Toneladas de CO2e Mitigadas: {roundCeiling(numeroToneladasMitigadas)}
      </p>
      <p>Arboles plantados: {roundCeiling(numeroArbolesPlantados)}</p>
      <p>
        Autos fuera de circulación: {roundCeiling(numeroAutosFueraCirculacion)}
      </p>
      <br />

      <p>Metros cuadrados necesarios: {roundCeiling(superficieRequerida)}</p>

      <br />
      <p>
        <strong>Contacto:</strong>
        <p>Email: {email}</p>
        <p>Telefono: {phoneNumber}</p>
        <p>Persona de Contacto: {name}</p>
      </p>
    </div>
  );
};
