import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { NumericFormat } from "react-number-format";

import { z } from "zod";

type DolarInputProps = {
  name: string;
  error?: Merge<FieldError, FieldErrorsImpl<{}>> | null;
  control: Control<any, any> | undefined;
};

export default function MoneyInput({
  name,
  error = null,
  control,
}: DolarInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...rest } }) => (
        <NumericFormat
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 max-w-40"
          thousandSeparator=","
          decimalSeparator="."
          prefix="$ "
          decimalScale={2}
          getInputRef={ref}
          {...rest}
        />
      )}
    />
  );
}
