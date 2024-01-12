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
  company: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  monthSpent: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  feeType: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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

async function onSubmit(data: z.infer<typeof formSchema>) {
  try {
    const response = await fetch("/api/quotes", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
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

const QuoteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      state: "",
      monthSpent: "",
      feeType: "",
      phoneNumber: "",
      email: "",
    },
  });

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
                <Input placeholder="Felix Vega" {...field} />
              </FormControl>
              {/* <FormDescription>denlednk.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de tu empresa:</FormLabel>
              <FormControl>
                <Input placeholder="Polygon" {...field} />
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
              <FormLabel>Estado donde está tu empresa:</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="¿Cuál es tu tarifa de CFE?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdbt">pdbt</SelectItem>
                    <SelectItem value="gdbt">gdbt</SelectItem>
                    <SelectItem value="gdmth">gdmth</SelectItem>
                    <SelectItem value="gdmto">gdmto</SelectItem>
                    <SelectItem value="dis">dis</SelectItem>
                    <SelectItem value="dist">gdmth</SelectItem>
                    <SelectItem value="unknown">no sé</SelectItem>
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
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aguascalientes">
                      aguascalientes
                    </SelectItem>
                    <SelectItem value="baja_california">
                      baja_california
                    </SelectItem>
                    <SelectItem value="baja_california_sur">
                      baja_california_sur
                    </SelectItem>
                    <SelectItem value="campeche">campeche</SelectItem>
                    <SelectItem value="chiapas">chiapas</SelectItem>
                    <SelectItem value="chihuahua">chihuahua</SelectItem>
                    <SelectItem value="coahuila">coahuila</SelectItem>
                    <SelectItem value="colima">colima</SelectItem>
                    <SelectItem value="durango">durango</SelectItem>
                    <SelectItem value="estado_de_mexico">
                      estado_de_mexico
                    </SelectItem>
                    <SelectItem value="guanajuato">guanajuato</SelectItem>
                    <SelectItem value="guerrero">guerrero</SelectItem>
                    <SelectItem value="hidalgo">hidalgo</SelectItem>
                    <SelectItem value="jalisco">jalisco</SelectItem>
                    <SelectItem value="michoacan">michoacan</SelectItem>
                    <SelectItem value="morelos">morelos</SelectItem>
                    <SelectItem value="nayarit">nayarit</SelectItem>
                    <SelectItem value="nuevo_leon">nuevo_leon</SelectItem>
                    <SelectItem value="oaxaca">oaxaca</SelectItem>
                    <SelectItem value="puebla">puebla</SelectItem>
                    <SelectItem value="queretaro">queretaro</SelectItem>
                    <SelectItem value="quintana_roo">quintana_roo</SelectItem>
                    <SelectItem value="san_luis_potosi">
                      san_luis_potosi
                    </SelectItem>
                    <SelectItem value="sinaloa">sinaloa</SelectItem>
                    <SelectItem value="sonora">sonora</SelectItem>
                    <SelectItem value="tabasco">tabasco</SelectItem>
                    <SelectItem value="tamaulipas">tamaulipas</SelectItem>
                    <SelectItem value="tlaxcala">tlaxcala</SelectItem>
                    <SelectItem value="veracruz">veracruz</SelectItem>
                    <SelectItem value="yucatan">yucatan</SelectItem>
                    <SelectItem value="zacatecas">zacatecas</SelectItem>
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
              <FormLabel>Teléfono celular:</FormLabel>
              <FormControl>
                <Input placeholder="55329289..." {...field} />
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
              <FormLabel>Teléfono celular:</FormLabel>
              <FormControl>
                <Input placeholder="felix@polygonag.com" {...field} />
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
