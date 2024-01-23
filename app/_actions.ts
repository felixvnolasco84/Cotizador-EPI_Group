"use server";

import { potenciaPanel } from "@/data/data";
import {
  ahorroEstimado,
  ahorroEstimadoPesos,
  arbolesPlantados,
  autosFueraDeCirculacion,
  calcularSuperficieRequerida,
  obtenerEnergiaAnual,
  obtenerGeneriaGeneradaAnual,
  obtenerValorFactorGeneracion,
  obtenerValorIncrementoEstimado,
  obtenerValorTarifa,
  pagoAnualEstimado,
  toneladasMitigadas,
} from "@/data/functions";
import { ContactFormEmail } from "@/emails/contact-form-email";
import { Resend } from "resend";

const resend = new Resend("re_SWujrBS8_LVE4q4EQnF9F6wJvqtz7Q7fM");



export async function sendEmail(data: any) {
  const { name, company, state, moneyMonthSpent, feeType, phoneNumber, email } =
    data;
  // Calcular el valor de la tarifa
  const tarifa = obtenerValorTarifa(state, feeType);

  console.log(tarifa);

  // Calcular el valor del incremento estimado
  const incrementoEstimado = obtenerValorIncrementoEstimado(feeType);

  // Calcular el valor de la energía anual
  const energiaAnual = obtenerEnergiaAnual(
    moneyMonthSpent,
    tarifa ?? 0
  );

  console.log(energiaAnual);

  // Calcular el valor del pago anual estimado
  const pagoAnual = pagoAnualEstimado(
    moneyMonthSpent,
    incrementoEstimado ?? 0
  );

  // Calcular el valor del factor de generación
  const factor = obtenerValorFactorGeneracion(state);

  // Calcular el valor de la energía diaria
  const energiaDia = energiaAnual / 365;

  // Calcular el valor de la energía generada
  const energiaGenerada = energiaDia / (factor ?? 0);

  // Calcular el valor de los paneles requeridos
  const panelesRequeridos = energiaGenerada / potenciaPanel;

  // Calcular el valor de la generación anual
  const generacionAnual = obtenerGeneriaGeneradaAnual(
    factor ?? 0,
    panelesRequeridos,
    potenciaPanel
  );

  // Calcular el valor del ahorro estimado
  const ahorroEstimadoPorcentaje = ahorroEstimado(
    generacionAnual,
    energiaAnual
  );

  // Calcular el valor del ahorro estimado en pesos
  const ahorroEstimadoDinero = ahorroEstimadoPesos(
    ahorroEstimadoPorcentaje,
    energiaAnual
  );

  // Calcular el valor de la tonelada mitigada
  const numeroToneladasMitigadas = toneladasMitigadas(generacionAnual);

  // Calcular el valor de los arboles plantados
  const numeroArbolesPlantados = arbolesPlantados(numeroToneladasMitigadas);

  // Calcular el valor de los autos fuera de circulación
  const numeroAutosFueraCirculacion = autosFueraDeCirculacion(
    numeroToneladasMitigadas
  );

  const superficieRequerida = calcularSuperficieRequerida(panelesRequeridos);

  //Enviar el email de contacto
  try {
    const data = await resend.emails.send({
      from: "hola@polygonag.com",
      to: [email],
      subject: "Nuevo contacto | Cotizador EPI",
      react: ContactFormEmail( {
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
      }   ),
    });
    return { success: true, energiaAnual, pagoAnual, panelesRequeridos, generacionAnual, ahorroEstimadoPorcentaje, ahorroEstimadoDinero, numeroToneladasMitigadas, numeroArbolesPlantados, numeroAutosFueraCirculacion, superficieRequerida };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}
