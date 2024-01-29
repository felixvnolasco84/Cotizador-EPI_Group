import { Manrope } from "next/font/google";
import EPIEnergyLogo from "@/public/images/energy1.png";

import QuoteForm from "./components/Quote/QuoteForm";
import Image from "next/image";

export const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${manrope.className} flex min-h-screen flex-col items-center justify-center p-12`}
    >
      <div className="z-10 w-full max-w-5xl flex-col justify-center gap-8 font-mono text-sm lg:flex">
        <Image src={EPIEnergyLogo} alt="EPI Energy" width={200} height={200} />        
        <QuoteForm />
      </div>
    </main>
  );
}
