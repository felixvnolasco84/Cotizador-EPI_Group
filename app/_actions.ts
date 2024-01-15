"use server";

import ContactFormEmail from "@/emails/contact-form-email";
import { Resend } from "resend";

const resend = new Resend("re_SWujrBS8_LVE4q4EQnF9F6wJvqtz7Q7fM");

export async function sendEmail(data: any) {
  const { name, company, state, moneyMonthSpent, feeType, phoneNumber, email } =
    data;
  console.log(data);
  try {
    const data = await resend.emails.send({
      from: "delivered@resend.dev",
      to: ["delivered@resend.dev", email],
      subject: "Nuevo contacto",
      react: ContactFormEmail({
        company,
        state,
        moneyMonthSpent,
        feeType,
        name,
        phoneNumber,
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
