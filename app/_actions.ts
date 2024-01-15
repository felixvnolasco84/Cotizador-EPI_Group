"use server";

import { potenciaPanel } from "@/data/data";
import {
  obtenerEnergiaAnual,
  obtenerValorFactor,
  obtenerValorIncrementoEstimado,
  obtenerValorTarifa,
  pagoAnualEstimado,
} from "@/data/functions";
import ContactFormEmail from "@/emails/contact-form-email";
import { Resend } from "resend";

const resend = new Resend("re_SWujrBS8_LVE4q4EQnF9F6wJvqtz7Q7fM");

export async function sendEmail(data: any) {
  const { name, company, state, moneyMonthSpent, feeType, phoneNumber, email } =
    data;

  const tarifa = obtenerValorTarifa(state, feeType);

  //RESULTADO
  const energiaAnual = obtenerEnergiaAnual(moneyMonthSpent, tarifa!);
  
  const incrementoEstimado = obtenerValorIncrementoEstimado(feeType);

  //RESULTADO
  const pagoAnual = pagoAnualEstimado(moneyMonthSpent, incrementoEstimado!);

  const factor = obtenerValorFactor(state);

  const energiaDia = energiaAnual / 365;

  const energiaGenerada = energiaDia / factor!;

  //RESULTADO
  const panelesRequeridos = Math.ceil(energiaGenerada / potenciaPanel);  

  try {
    const data = await resend.emails.send({
      from: "hola@polygonag.com",
      to: [email],
      subject: "Nuevo contacto | Cotizador EPI",
      react: ContactFormEmail({
        company,
        state,
        moneyMonthSpent,
        feeType,
        name,
        phoneNumber,
        energiaAnual,
        pagoAnual,
        panelesRequeridos,
      }),
    });
    console.log(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}
