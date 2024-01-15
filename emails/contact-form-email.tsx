const ContactFormEmail = ({
  name,
  company,
  state,
  moneyMonthSpent,
  feeType,
  phoneNumber,
  email,
}: any) => (
  <div>
    <h1>Nuevo Contacto | Cotizador EPI</h1>
    <p>
      De <strong>{company}</strong> con el correo {email}
    </p>
    <p>Estado: {state}</p>
    <p>Tipo de Pago: {feeType}</p>
    <p>Monto por mes: {moneyMonthSpent}</p>
    <p>Telefono: {phoneNumber}</p>
    <p>Persona de Contacto: {name}</p>
    <p>Tipo de cotización: Paneles Solares</p>
  </div>
);

export default ContactFormEmail;
