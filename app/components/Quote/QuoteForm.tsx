"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as z from "zod";

const formSchema = z.object({
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
      message: "El nombre debe tener al menos 2 carácteres.",
    })
    .max(160, {
      message: "El nombre no puede tener más de 160 carácteres.",
    }),
  state: z.string().min(2, {
    message: "Valor Incorrecto",
  }),
  moneyMonthSpent: z.string().min(2, {
    message: "Valor Incorrecto",
  }),
  feeType: z.string().min(2, {
    message: "Valor Incorrecto",
  }),
  phoneNumber: z.string().min(2, {
    message: "Valor Incorrecto",
  }),
  email: z.string().email({ message: "Correo electrónico Inválido" }),
});
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/app/_actions";


const QuoteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      state: "",
      moneyMonthSpent: "",
      feeType: "",
      phoneNumber: "",
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await sendEmail(data);
      const response = await fetch("/api/quotes", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(response);

      if (response.ok) {
        toast({
          variant: "default",
          title: "Se ha enviado correctamente el formulario",
        });

        form.reset();
      }

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "OH!",
          description: "No se ha enviado correctamente el formulario",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "OH!",
        description: "No se ha enviado correctamente el formulario",
      });
    }
  }  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="moneyMonthSpent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>En promedio, ¿Cuánto pagas de luz cada mes?</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de tu empresa:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="feeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Cuál es tu tarifa de CFE?</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tarifa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PDBT">PDBT</SelectItem>
                    <SelectItem value="GDBT">GDBT</SelectItem>
                    <SelectItem value="GDMTH">GDMTH</SelectItem>
                    <SelectItem value="GDMTO">GDMTO</SelectItem>
                    <SelectItem value="DIS">DIS</SelectItem>
                    <SelectItem value="DIST">DIST</SelectItem>
                    <SelectItem value="Promedio">No sé</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado donde está tu empresa:</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Aguascalientes">
                      Aguascalientes
                    </SelectItem>
                    <SelectItem value="Baja California">
                      Baja California
                    </SelectItem>
                    <SelectItem value="Baja California Sur">
                      Baja California Sur
                    </SelectItem>
                    <SelectItem value="Campeche">Campeche</SelectItem>
                    <SelectItem value="Chiapas">Chiapas</SelectItem>
                    <SelectItem value="Chihuahua">Chihuahua</SelectItem>
                    <SelectItem value="Coahuila">Coahuila</SelectItem>
                    <SelectItem value="Colima">Colima</SelectItem>
                    <SelectItem value="Ciudad de México">
                      Ciudad de México
                    </SelectItem>
                    <SelectItem value="Durango">Durango</SelectItem>
                    <SelectItem value="México">México</SelectItem>
                    <SelectItem value="Guanajuato">Guanajuato</SelectItem>
                    <SelectItem value="Guerrero">Guerrero</SelectItem>
                    <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                    <SelectItem value="Jalisco">Jalisco</SelectItem>
                    <SelectItem value="Michoacán">Michoacán</SelectItem>
                    <SelectItem value="Morelos">Morelos</SelectItem>
                    <SelectItem value="Nayarit">Nayarit</SelectItem>
                    <SelectItem value="Nuevo León">Nuevo León</SelectItem>
                    <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                    <SelectItem value="Puebla">Puebla</SelectItem>
                    <SelectItem value="Querétaro">Querétaro</SelectItem>
                    <SelectItem value="Quintana Roo">Quintana Roo</SelectItem>
                    <SelectItem value="San Luis Potosí">
                      San Luis Potosí
                    </SelectItem>
                    <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                    <SelectItem value="Sonora">Sonora</SelectItem>
                    <SelectItem value="Tabasco">Tabasco</SelectItem>
                    <SelectItem value="Tamaulipas">Tamaulipas</SelectItem>
                    <SelectItem value="Tlaxcala">Tlaxcala</SelectItem>
                    <SelectItem value="Veracruz">Veracruz</SelectItem>
                    <SelectItem value="Yucatán">Yucatán</SelectItem>
                    <SelectItem value="Zacatecas">Zacatecas</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel id="">Teléfono celular:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Cotizar</Button>
      </form>
    </Form>
  );
};

export default QuoteForm;
