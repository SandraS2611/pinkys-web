import Link from "next/link";

export default function PuntoCeroPage() {
  return (
    <div className="min-h-screen bg-[#DCC4AA] flex flex-col items-center justify-center p-6 text-[#59422F]">
      
      {/* Botón de regreso minimalista */}
      <nav className="absolute top-10 left-10">
        <Link href="/" className="group flex items-center gap-2 font-serif tracking-widest uppercase text-sm">
          <span className="transition-transform group-hover:-translate-x-2">←</span> 
          Regresar
        </Link>
      </nav>

      {/* Contenido Principal */}
      <main className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-7xl md:text-9xl font-serif tracking-tighter opacity-90">
            PUNTO CERO
          </h1>
          <div className="h-[1px] w-full bg-[#59422F] scale-x-50 opacity-30"></div>
        </div>
        
        <p className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase italic opacity-70">
          Próximamente
        </p>

        <div className="pt-10">
          <p className="text-xs uppercase tracking-[0.5em] font-bold opacity-40">
            Elegancia & Exclusividad
          </p>
        </div>
      </main>

      {/* Decoración de esquina (Opcional - Estética Oro) */}
      <div className="absolute bottom-10 right-10 border-r-2 border-b-2 border-[#D4AF37] w-20 h-20 opacity-40"></div>
    </div>
  );
}