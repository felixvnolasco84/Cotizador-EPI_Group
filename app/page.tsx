import { Manrope } from "next/font/google";

import QuoteForm from "./components/Quote/QuoteForm";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${manrope.className} flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <QuoteForm />
      </div>
    </main>
  );
}
