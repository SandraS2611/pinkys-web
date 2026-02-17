"use client"; // Necesario para que el botón de volver atrás funcione bien con el router

import Image from "next/image";
import Link from "next/link";

const servicios = [
  {
    id: 1,
    titulo: "Inflables Temáticos",
    descripcion: "Diversión segura con nuestros castillos y toboganes gigantes.",
    imagen: "/img/pinky/juegos.jpg", // Usa tus imágenes aquí
  },
  {
    id: 2,
    titulo: "Catering Infantil",
    descripcion: "Menús deliciosos y coloridos diseñados para los más pequeños.",
    imagen: "/img/pinky/prop2.jpg",
  },
  {
    id: 3,
    titulo: "Decoración Global",
    descripcion: "Transformamos cualquier espacio en un mundo de fantasía.",
    imagen: "/img/pinky/prop1.jpg",
  },
];

export default function PinkysPage() {
  const whatsappNumber = "5493855822297"; 

  return (
    // CAMBIO AQUÍ: Forzamos el color rosa de la paleta y el patrón
    <div className="min-h-screen bg-[#E8A2B0] bg-pinky-pattern p-6 md:p-12">
      
      {/* Navegación mejorada para que resalte en el rosa */}
      <nav className="max-w-6xl mx-auto mb-10">
        <Link href="/" className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-md">
          ← Volver al Inicio
        </Link>
      </nav>

      {/* Título Principal */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-black text-black drop-shadow-sm mb-2">
          PINKY'S <span className="text-[#FF00FF]">FEST</span>
        </h1>
        <div className="h-1.5 w-32 bg-white mx-auto rounded-full mb-6"></div> {/* Línea decorativa blanca */}
        <p className="text-black text-xl font-bold bg-white/30 inline-block px-6 py-2 rounded-2xl border-2 border-white/50">
          ¡Selecciona el servicio que deseas para tu fiesta!
        </p>
      </header>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {servicios.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-[2.5rem] p-4 shadow-2xl hover:-translate-y-4 transition-all duration-500 border-4 border-transparent hover:border-[#FF00FF]"
          >
            {/* Contenedor Imagen */}
            <div className="relative h-60 w-full rounded-[2rem] overflow-hidden mb-6">
              <Image 
                src={item.imagen} 
                alt={item.titulo} 
                fill 
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="text-center px-4 pb-4">
              <h2 className="text-2xl font-black text-black mb-3 uppercase">{item.titulo}</h2>
              <p className="text-gray-600 font-medium mb-8 leading-tight">
                {item.descripcion}
              </p>

              {/* Botón WPP solicitado: Fucsia con letras negras */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hola! Quiero contratar el servicio de: ${item.titulo}`}
                target="_blank"
                className="block w-full bg-[#FF00FF] hover:bg-black hover:text-[#FF00FF] text-black font-black py-4 rounded-2xl shadow-[0_6px_0_rgba(0,0,0,0.1)] transition-all uppercase tracking-tighter"
              >
                Quiero contratar este servicio
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}