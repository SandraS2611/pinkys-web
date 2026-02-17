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
  {/* Splashes animados */}
<div className="absolute inset-0 pointer-events-none">
  <svg className="absolute splash" style={{top:"20%", left:"10%", animationDelay:"0s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M60 10 C90 20, 110 50, 80 90 C50 120, 20 100, 30 50 Z" fill="#FF00FF"/>
  </svg>

  <svg className="absolute splash" style={{top:"40%", left:"70%", animationDelay:"0.5s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M20 30 C40 10, 100 20, 90 70 C80 110, 30 100, 20 60 Z" fill="#00CFFF"/>
  </svg>

  <svg className="absolute splash" style={{top:"60%", left:"30%", animationDelay:"1s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M30 20 C70 0, 110 40, 80 100 C50 120, 10 80, 30 40 Z" fill="#FFD166"/>
  </svg>

  <svg className="absolute splash" style={{top:"80%", left:"50%", animationDelay:"1.5s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M50 10 C100 30, 110 80, 60 110 C20 100, 0 50, 40 20 Z" fill="#06D6A0"/>
  </svg>

  <svg className="absolute splash" style={{top:"25%", left:"60%", animationDelay:"2s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M40 10 C90 20, 120 60, 70 110 C30 120, 0 70, 20 30 Z" fill="#EF476F"/>
  </svg>

  <svg className="absolute splash" style={{top:"70%", left:"80%", animationDelay:"2.5s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M20 40 C60 0, 120 30, 100 90 C80 120, 30 100, 10 60 Z" fill="#118AB2"/>
  </svg>

  <svg className="absolute splash" style={{top:"50%", left:"20%", animationDelay:"3s"}} width="120" height="120" viewBox="0 0 120 120">
    <path d="M30 30 C70 10, 110 50, 90 100 C50 120, 10 80, 20 50 Z" fill="#073B4C"/>
  </svg>
</div>


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
        {/* Imagen PNG que se agranda en bucle */}
<Image 
  src="/img/puntocero.png" 
  alt="Animación Punto Cero" 
  width={500} 
  height={500} 
  className="absolute grow-center"
/>

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