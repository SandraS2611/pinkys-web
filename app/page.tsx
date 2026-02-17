import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row overflow-hidden">
      
      {/* SECCIÓN PINKY'S FEST */}
      <Link 
        href="/pinkys" 
        className="group relative flex flex-1 items-center justify-center bg-[#E8A2B0] transition-all duration-700 hover:flex-[1.2] border-b-4 md:border-b-0 md:border-r-2 border-white"
      >
        <div className="z-10 flex flex-col items-center gap-8 transition-all duration-500 group-hover:scale-105">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-2xl p-4">
            <Image 
              src="/img/pinkys.jpg" 
              alt="Pinky's Fest"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          
          {/* BOTÓN FUCSIA CON LETRAS NEGRAS */}
          <button className="rounded-full bg-[#FF00FF] px-10 py-4 font-black text-black text-xl shadow-[0_6px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 transition-all uppercase">
            Eventos Infantiles
          </button>
        </div>
      </Link>

      {/* SECCIÓN PUNTO CERO */}
      <Link 
        href="/punto-cero" 
        className="group relative flex flex-1 items-center justify-center bg-[#DCC4AA] transition-all duration-700 hover:flex-[1.2]"
      >
        <div className="z-10 flex flex-col items-center gap-8 transition-all duration-500 group-hover:scale-105">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-xl p-4">
            <Image 
              src="/img/puntocero.jpg" 
              alt="Punto Cero"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          <button className="rounded-none border-2 border-[#59422F] bg-[#59422F] px-10 py-4 font-serif font-bold text-white text-xl tracking-widest hover:bg-transparent hover:text-[#59422F] transition-all uppercase">
            Servicios para Eventos
          </button>
        </div>
      </Link>

    </main>
  );
}