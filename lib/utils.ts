import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 carácteres.",
    })
    .max(160, {
      message: "El nombre no puede tener más de 160 carácteres.",
    }),
  company: z
    .string()
    .min(2, {
      message: "El nombre de la empresa debe tener al menos 2 carácteres.",
    })
    .max(160, {
      message: "El nombre no puede tener más de 160 carácteres.",
    }),
  state: z.string().min(2, {
    message: "Se necesita escoger un estado",
  }),
  moneyMonthSpent: z.string().min(2, {
    message: "Se necesita establecer un gasto mensual",
  }),
  feeType: z.string().min(2, {
    message: "Se necesita establecer un tipo de tarifa",
  }),
  phoneNumber: z.string().min(2, {
    message: "Se necesita establecer un número de contacto",
  }),
  email: z.string().email({ message: "Correo electrónico Inválido" }),
});

export type Inputs = z.infer<typeof formSchema>;

export type FieldName = keyof Inputs;



