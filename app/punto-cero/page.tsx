"use client";

import Image from "next/image";
import Link from "next/link";

const serviciosPuntoCero = [
  {
    id: 1,
    titulo: "Candy Food",
    descripcion: "Panchuques, hamburguesas, mini donas, algodón de azúcar y cascada de chocolate.",
    detalles: [
      "Panchuques • Panchitos • Hamburguesitas",
      "Mini donitas • Papitas fritas",
      "Algodón de azúcar • Licuados",
      "Cascada de chocolate con frutas"
    ],
    imagen: "/img/punto/candy-food.jpg", 
  },
  {
    id: 2,
    titulo: "Coctelería de Autor",
    descripcion: "Barras premium con mixología diseñada a medida para tu celebración.",
    imagen: "/img/punto/barra.jpg",
  },
  {
    id: 3,
    titulo: "Planificación Integral",
    descripcion: "Gestión impecable y diseño de eventos corporativos y sociales.",
    imagen: "/img/puntocero.jpg",
  },
];

export default function PuntoCeroPage() {
  const whatsappNumber = "5493854897798";

return (
    /* Contenedor Base con el color Beige */
    <div className="relative min-h-screen bg-[#DCC4AA] text-[#59422F]">
      
      {/* CAPA DE TEXTURA: Solo esto tiene los logos blancos */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          backgroundImage: `url("/img/puntocero.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px", // Ajustá esto para separar más (ej: 400px)
          filter: "brightness(0) invert(1)", // Vuelve el logo PNG blanco
          opacity: 0.07, // Transparencia sutil
        }}
      />

      {/* CAPA DE CONTENIDO: Todo lo que se tiene que ver bien */}
      <div className="relative z-10 p-6 md:p-12">
      {/* Navegación */}
      <nav className="max-w-6xl mx-auto mb-16">
        <Link href="/" className="group flex items-center gap-2 font-serif tracking-widest uppercase text-sm border-b border-transparent hover:border-[#59422F] w-fit transition-all">
          <span className="transition-transform group-hover:-translate-x-2">←</span> 
          Regresar al inicio
        </Link>
      </nav>

      {/* Header */}
      <header className="text-center mb-20 space-y-4">
        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter uppercase">
          Punto Cero
        </h1>
        <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase flex items-center justify-center gap-4">
          <span className="text-2xl md:text-4xl opacity-60">•</span>
          EVENTOS
          <span className="text-2xl md:text-4xl opacity-60">•</span>
        </h2>
        <div className="h-[1px] w-40 bg-[#59422F] mx-auto opacity-40"></div>
        <p className="text-sm uppercase tracking-[0.4em] font-light">Elegancia & Exclusividad</p>
      </header>

      {/* Grid de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
        {serviciosPuntoCero.map((item) => (
          <div 
            key={item.id}
            className="group bg-[#E5D5C5] border border-[#59422F]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm"
          >
            <div className="relative h-72 w-full overflow-hidden bg-white/20">
              <Image 
                src={item.imagen} 
                alt="" 
                fill 
                className="object-cover blur-md opacity-40 scale-110"
              />
              <div className="relative h-full w-full flex items-center justify-center p-2">
                <Image 
                  src={item.imagen} 
                  alt={item.titulo} 
                  fill 
                  className="object-contain transition-all duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="p-8 text-center space-y-4">
              <h2 className="text-xl font-serif font-bold uppercase tracking-widest border-b border-[#59422F]/20 pb-2 flex items-center justify-center gap-2">
                 <span className="text-[#D4AF37]">•</span> {item.titulo} <span className="text-[#D4AF37]">•</span>
              </h2>
              
              <div className="min-h-[100px] flex flex-col justify-center">
                {item.detalles ? (
                  <div className="space-y-1">
                    {item.detalles.map((detalle, idx) => (
                      <p key={idx} className="text-[#59422F]/80 font-light text-[10px] md:text-xs uppercase tracking-wider">
                        {detalle}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#59422F]/80 font-light leading-relaxed text-sm italic">
                    {item.descripcion}
                  </p>
                )}
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=Deseo solicitar información sobre el servicio exclusivo de: ${item.titulo}`}
                target="_blank"
                className="inline-block w-full mt-4 border border-[#59422F] bg-[#59422F] text-white py-4 font-serif text-xs uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#59422F] transition-all duration-300"
              >
                Consultar Servicio
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Decoración */}
      <div className="fixed bottom-10 right-10 border-r border-b border-[#D4AF37] w-16 h-16 opacity-30 pointer-events-none"></div>
    </div>
    </div>
  );
}