"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as z from "zod";

import Puff from "@/public/images/puff.svg";

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
import { useState } from "react";
import { formSteps } from "@/data/data";
import {
  BellElectricIcon,
  DollarSignIcon,
  HomeIcon,
  PowerCircleIcon,
} from "lucide-react";
import ResultComponent from "@/components/Result/ResultComponent";
import MoneyInput from "@/components/ui/moneyInput";

const QuoteForm = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<any>(null);

  const delta = currentStep - previousStep;

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

  type Inputs = z.infer<typeof formSchema>;

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = formSteps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < formSteps.length - 1) {
      if (currentStep === formSteps.length - 2) {
        form.handleSubmit(onSubmit)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

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
      setLoading(true);
      const quote = await sendEmail(data);
      const response = await fetch("/api/quotes", {
        method: "POST",
        body: JSON.stringify(data),
      });      
      setQuote(quote);

      if (response.ok) {
        toast({
          variant: "default",
          title: "Se ha enviado correctamente el formulario",
        });
        setLoading(false);
        form.reset();
      }

      if (!response.ok) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "OH!",
          description: "No se ha enviado correctamente el formulario",
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        variant: "destructive",
        title: "OH!",
        description: "No se ha enviado correctamente el formulario",
      });
    }
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {formSteps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex"
            >
              <div className="flex w-1/3 flex-col items-center space-y-2">
                <DollarSignIcon className="h-8 w-8 text-sky-800" />
                <FormField
                  control={form.control}
                  name="moneyMonthSpent"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center text-center">
                      <FormLabel>
                        En promedio, ¿Cuánto pagas de luz cada mes?
                      </FormLabel>
                      <MoneyInput
                        control={form.control}
                        name="moneyMonthSpent"
                        error={form.formState.errors.moneyMonthSpent}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-1/3 flex-col items-center space-y-2">
                <PowerCircleIcon className="h-8 w-8 text-sky-800" />
                <FormField
                  control={form.control}
                  name="feeType"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center text-center">
                      <FormLabel>¿Cuál es tu tarifa de CFE?</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="max-w-40">
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
              </div>

              <div className="flex w-1/3 flex-col items-center space-y-2">
                <HomeIcon className="h-8 w-8 text-sky-800" />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center text-center">
                      <FormLabel>Estado donde está tu empresa:</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="max-w-40">
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
                            <SelectItem value="Guanajuato">
                              Guanajuato
                            </SelectItem>
                            <SelectItem value="Guerrero">Guerrero</SelectItem>
                            <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                            <SelectItem value="Jalisco">Jalisco</SelectItem>
                            <SelectItem value="Michoacán">Michoacán</SelectItem>
                            <SelectItem value="Morelos">Morelos</SelectItem>
                            <SelectItem value="Nayarit">Nayarit</SelectItem>
                            <SelectItem value="Nuevo León">
                              Nuevo León
                            </SelectItem>
                            <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                            <SelectItem value="Puebla">Puebla</SelectItem>
                            <SelectItem value="Querétaro">Querétaro</SelectItem>
                            <SelectItem value="Quintana Roo">
                              Quintana Roo
                            </SelectItem>
                            <SelectItem value="San Luis Potosí">
                              San Luis Potosí
                            </SelectItem>
                            <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                            <SelectItem value="Sonora">Sonora</SelectItem>
                            <SelectItem value="Tabasco">Tabasco</SelectItem>
                            <SelectItem value="Tamaulipas">
                              Tamaulipas
                            </SelectItem>
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
              </div>
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              className="flex flex-col gap-4"
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
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
              {/* <Button type="submit" className="bg-sky-700 hover:bg-sky-700/85">
                Cotizar
              </Button> */}
            </motion.div>
          )}
          {currentStep === 2 && (
            <div className="flex flex-col items-center justify-center">
              {loading ? (
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#1a1a1a"
                >
                  <g fill="none" fill-rule="evenodd" stroke-width="2">
                    <circle cx="22" cy="22" r="1">
                      <animate
                        attributeName="r"
                        begin="0s"
                        dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-opacity"
                        begin="0s"
                        dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="22" cy="22" r="1">
                      <animate
                        attributeName="r"
                        begin="-0.9s"
                        dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-opacity"
                        begin="-0.9s"
                        dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </svg>
              ) : (
                quote !== null && <ResultComponent quote={quote} />
              )}
            </div>
          )}
        </form>
      </Form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === formSteps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
