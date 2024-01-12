import Image from "next/image";
import QuoteForm from "./components/Quote/QuoteForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <QuoteForm />
      </div>
    </main>
  );
}
