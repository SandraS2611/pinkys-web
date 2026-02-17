"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Datos de las promociones estructurados
const promociones = [
  {
    id: "promo1",
    titulo: "Combo Base - Pinky's Fest",
    imagen: "/img/pinky/base.jpg", 
    info: "🎈 PROMOCIÓN FEBRERO Y MARZO\nIdeal para un festejo simple, cómodo y totalmente equipado.",
    capacidad: "📍 Capacidad: 40 adultos y 20 niños",
    detalles: [
      "Salón totalmente equipado",
      "Decoración básica con candy bar",
      "Pelotero y Cama elástica",
      "Yenga gigante",
      "Mesas, manteles, cubresillas y sillas",
      "Sillitas y mesitas para niños",
      "Sonido, Barra, Pantalla y Proyector"
    ],
    precios: {
      semana: "$120.000",
      finde: "$130.000"
    },
    fotos: ["/img/pinky/salon.jpg", "/img/pinky/juegos.jpg"]
  },
  {
    id: "promo2",
    titulo: "Combo Pinky’s",
    imagen: "/img/pinky/promo1.jpg", 
    info: "🎉 Más diversión y menos preocupaciones 💖\nIncluye todo lo del Combo Base para un cumple increíble.",
    capacidad: "📍 Capacidad: 40 adultos y 20 niños",
    detalles: [
      "Todo lo incluido en el Combo Base",
      "Animación infantil",
      "Coordinación de juegos",
      "Personal especializado"
    ],
    precios: {
      semana: "$150.000",
      finde: "$160.000"
    },
    fotos: ["/img/pinky/prop2.jpg", "/img/pinky/juegos.jpg"]
  },
  {
    id: "promo3",
    titulo: "Combo Pinky’s Full",
    imagen: "/img/pinky/pinkys-full.jpg", 
    info: "✨ La experiencia completa, sin pensar en nada 💫\nIncluye todo lo del Combo Pinky’s para tu tranquilidad total.",
    capacidad: "📍 Capacidad: 40 adultos y 20 niños",
    detalles: [
      "Todo lo incluido en el Combo Pinky's",
      "Decoración completa temática",
      "Servicio de Animación y Mozos",
      "Organización integral del evento"
    ],
    precios: {
      semana: "$180.000",
      finde: "$190.000"
    },
    fotos: ["/img/pinky/prop1.jpg", "/img/pinky/salon.jpg"]
  }
];

const servicios = [
  {
  id: 1,
  titulo: "Decoración",
  descripcion: "¡Creamos el escenario de tus sueños! Ambientaciones temáticas personalizadas con atención en cada detalle, transformando tu salón en un mundo de fantasía lleno de color y magia. ✨",
  imagen: "/img/pinky/decoraciones/deco.jpg",
  // Agregamos las fotos para el carousel
  fotos: [
    "/img/pinky/decoraciones/deco1.jpg",
    "/img/pinky/decoraciones/deco2.jpg",
    "/img/pinky/decoraciones/deco3.jpg",
    "/img/pinky/decoraciones/deco4.jpg",
    "/img/pinky/decoraciones/deco5.jpg",
    "/img/pinky/decoraciones/deco6.jpg",
    "/img/pinky/decoraciones/deco7.jpg",
    "/img/pinky/decoraciones/deco8.jpg",
    "/img/pinky/decoraciones/deco9.jpg"
  ]
},
  {
    id: 2,
    titulo: "Personajes",
    descripcion: "¡La sorpresa más esperada! Nuestros personajes llegan para bailar, jugar y crear recuerdos para siempre. Una experiencia visual de alta calidad con animadores profesionales que dejará a todos con la boca abierta. ✨",
    imagen: "/img/pinky/personajes/personaje.jpg",
      fotos: [
    "/img/pinky/personajes/abeja.jpg",
    "/img/pinky/personajes/aladin.jpg",
    "/img/pinky/personajes/alicia.jpg",
    "/img/pinky/personajes/ana.jpg",
    "/img/pinky/personajes/ariel.jpg",
    "/img/pinky/personajes/bartolito.jpg",
    "/img/pinky/personajes/bella.jpg",
    "/img/pinky/personajes/blancanieves.jpg",
    "/img/pinky/personajes/daisy.jpg",
    "/img/pinky/personajes/elsa.jpg",
    "/img/pinky/personajes/leon.jpg",
     "/img/pinky/personajes/mariobros.jpg",
    "/img/pinky/personajes/messi.jpg",
    "/img/pinky/personajes/plimplim.jpg",
     "/img/pinky/personajes/spiderman.jpg",
    "/img/pinky/personajes/stich.jpg"
  ]
  },
  {
    id: 3,
    titulo: "Pinta Caritas",
    descripcion: "Maquillaje artístico profesional con materiales hipoalergénicos. Diseños increíbles con la seguridad que ellos merecen. ¡Incluye glitter y gemas brillantes! ✨",
    imagen: "/img/pinky/pinta_caritas/carita.jpg",
      fotos: [
    "/img/pinky/pinta_caritas/carita1.jpg",
    "/img/pinky/pinta_caritas/carita2.jpg",
    "/img/pinky/pinta_caritas/carita3.jpg",
    "/img/pinky/pinta_caritas/carita4.jpg",
    "/img/pinky/pinta_caritas/carita5.jpg",
    "/img/pinky/pinta_caritas/carita6.jpg",
    "/img/pinky/pinta_caritas/carita7.jpg",
    "/img/pinky/pinta_caritas/carita8.jpg",
    "/img/pinky/pinta_caritas/carita9.jpg",
    "/img/pinky/pinta_caritas/carita10.jpg",
    "/img/pinky/pinta_caritas/carita11.jpg",
    "/img/pinky/pinta_caritas/carita12.jpg",
    "/img/pinky/pinta_caritas/carita13.jpg",
    "/img/pinky/pinta_caritas/carita14.jpg",
    "/img/pinky/pinta_caritas/carita15.jpg",
    "/img/pinky/pinta_caritas/carita16.jpg",
    "/img/pinky/pinta_caritas/carita17.jpg",
    "/img/pinky/pinta_caritas/carita18.jpg",
    "/img/pinky/pinta_caritas/carita19.jpg",
    "/img/pinky/pinta_caritas/carita20.jpg",
    "/img/pinky/pinta_caritas/carita21.jpg",
    "/img/pinky/pinta_caritas/carita22.jpg",
    "/img/pinky/pinta_caritas/carita23.jpg",
    "/img/pinky/pinta_caritas/carita24.jpg",
    "/img/pinky/pinta_caritas/carita25.jpg",
    "/img/pinky/pinta_caritas/carita26.jpg",
    "/img/pinky/pinta_caritas/carita27.jpg"
  ]
  },
  {
    id: 4,
    titulo: "Juegos",
    descripcion: "¡Diversión sin límites para todas las edades! Desde inflables gigantes hasta desafíos de destreza, diseñados para mantener a todos los chicos activos y felices. 🎈",
    imagen: "/img/pinky/juegos/juego1.jpg",
     fotos: [
    "/img/pinky/juegos/juego1.jpg",
    "/img/pinky/juegos/juego2.jpg",
    "/img/pinky/juegos/juego3.jpg",
    "/img/pinky/juegos/juego4.jpg",
    "/img/pinky/juegos/juego5.jpg"
  ]
  },
   {
    id: 5,
    titulo: "Baby Showers & Revelaciones de Sexo",
    descripcion: "¡Celebramos la dulce espera! Creamos el ambiente perfecto para compartir la emoción y la sorpresa de la nueva vida que llega con detalles mágicos e inolvidables. ✨",
    imagen: "/img/pinky/propbaby.jpg",
  },
  {
    id: 6,
    titulo: "Animaciones Infantiles",
    descripcion: "¡Diversión al máximo nivel! Juegos dinámicos, música y coordinación profesional para que los chicos sean los protagonistas de una aventura llena de risas y energía. 🎈",
    imagen: "/img/pinky/propinfantil.jpg",
  },
];

export default function PinkysPage() {
  const [promoActiva, setPromoActiva] = useState<any>(null);
  const [servicioActivo, setServicioActivo] = useState<any>(null);
  const whatsappNumber = "5493855822297"; 

  return (
    <div className="min-h-screen bg-[#E8A2B0] bg-pinky-pattern p-6 md:p-12">
      
      {/* Navegación */}
      <nav className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <Link 
          href="/" 
          className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-md flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          <span className="hidden md:inline">Volver</span>
        </Link>

        <a 
          href="https://maps.app.goo.gl/KiNWgjKsXT7sju9LA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:bg-[#FF00FF] hover:text-white transition-all border-2 border-black/10 flex items-center gap-2 font-bold text-sm md:text-base"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="hidden sm:inline">Ver ubicación del Salón</span>
        </a>
      </nav>

      {/* Header con Promociones debajo del texto */}
      <header className="text-center mb-16 relative">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* Título Central */}
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-black drop-shadow-sm mb-2 uppercase">
              PINKY'S <span className="text-[#FF00FF]">FEST</span>
            </h1>

          {/* Contenedor de Promociones (3 Tarjetas) */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {promociones.map((promo) => (
              <div 
                key={promo.id}
                onClick={() => setPromoActiva(promo)}
                className="cursor-pointer group relative w-78 h-88 md:w-94 md:h-94 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-[#FF00FF] hover:scale-105 transition-all duration-300"
              >
                <Image 
                  src={promo.imagen} 
                  alt={promo.titulo} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2">
                  <span className="text-white font-black text-xs md:text-sm uppercase text-center">{promo.titulo}</span>
                  <span className="text-white font-bold text-[10px] mt-2 bg-[#FF00FF] px-2 py-1 rounded-full">VER PROMO</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-1.5 w-32 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-black text-xl font-bold bg-white/30 inline-block px-6 py-2 rounded-2xl border-2 border-white/50 mb-4">
              ¡Selecciona el servicio que deseas para tu fiesta!
            </p>
          </div>
      </header>

      {/* Grid de Cards de Servicios (CONFIGURADO PARA CARDS MÁS ANCHAS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
        {servicios.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-[2.5rem] p-4 shadow-2xl hover:-translate-y-4 transition-all duration-500 border-4 border-transparent hover:border-[#FF00FF] overflow-hidden"
          >
            <div className="relative h-104 w-full rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
              <Image 
                src={item.imagen} 
                alt="" 
                fill 
                className="object-cover blur-md opacity-30 scale-110"
              />
              <div className="relative h-full w-full flex items-center justify-center p-2">
                <Image 
                  src={item.imagen} 
                  alt={item.titulo} 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

           <div className="text-center px-4 pb-4">
            <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">
              {item.titulo}
            </h2>
            {/* Cambiado text-gray-600 por text-gray-800 y text-xl para más presencia */}
            <p className="text-gray-800 font-bold text-xl md:text-1xl mb-10 leading-snug min-h-[4rem] flex items-center justify-center">
              {item.descripcion}
            </p>
            <button 
              onClick={() => setServicioActivo(item)}
              className="block w-full bg-[#FF00FF] hover:bg-black hover:text-[#FF00FF] text-black font-black py-5 rounded-2xl shadow-[0_6px_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-tighter cursor-pointer text-lg"
            >
              Ver Galería y Contratar
            </button>
          </div>
          </div>
        ))}
      </div>

      {/* MODAL DE PROMOCIONES DINÁMICO (MÁS ANCHO Y DISTRIBUIDO) */}
{promoActiva && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    {/* Cambiado max-w-2xl por max-w-4xl */}
    <div className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-8 md:p-12 border-8 border-[#FF00FF] animate-in zoom-in duration-300">
      <button 
        onClick={() => setPromoActiva(null)}
        className="absolute top-6 right-6 bg-black text-white w-10 h-10 rounded-full font-bold hover:bg-[#FF00FF] transition-all z-10"
      >
        X
      </button>
      
      <h2 className="text-3xl md:text-5xl font-black text-black mb-2 uppercase leading-tight italic">{promoActiva.titulo}</h2>
      {promoActiva.capacidad && (
        <p className="text-[#FF00FF] font-black text-xl mb-6">{promoActiva.capacidad}</p>
      )}

      {/* Grid de dos columnas para aprovechar el ancho */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-gray-700 font-medium mb-6 whitespace-pre-line text-lg">
            {promoActiva.info}
          </p>
          
          {promoActiva.detalles && (
            <div className="bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200 text-left">
              <p className="font-bold text-gray-800 mb-3 uppercase text-[10px] tracking-widest text-center">¿Qué incluye este combo?</p>
              <ul className="space-y-2">
                {promoActiva.detalles.map((detalle: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-bold">
                    <span className="text-[#FF00FF]">✔</span> {detalle}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {/* Cuadros de Precios */}
          {promoActiva.precios && (
            <div className="flex flex-col gap-3">
              <div className="bg-black text-white p-4 rounded-2xl text-center">
                <p className="text-[10px] uppercase opacity-60">Días de semana</p>
                <p className="text-2xl font-black">{promoActiva.precios.semana}</p>
              </div>
              <div className="bg-[#FF00FF] text-black p-4 rounded-2xl text-center shadow-lg">
                <p className="text-[10px] uppercase opacity-60 font-bold">Fines de semana</p>
                <p className="text-2xl font-black">{promoActiva.precios.finde}</p>
              </div>
            </div>
          )}

          {/* Fotos de Galería */}
          <div className="grid grid-cols-2 gap-4">
            {promoActiva.fotos.map((f: string, i: number) => (
              <div key={i} className="relative h-32 rounded-2xl overflow-hidden border-2 border-gray-100">
                <Image src={f} alt="Detalle" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa la promo: ${promoActiva.titulo}`}
        target="_blank"
        className="block w-full bg-[#FF00FF] text-black text-center font-black py-5 rounded-2xl shadow-lg hover:bg-black hover:text-[#FF00FF] transition-all uppercase text-lg"
      >
        Consultar Disponibilidad por WhatsApp
      </a>
    </div>
  </div>
)}

{/* MODAL DE GALERÍA DE SERVICIOS (SUPER ANCHO) */}
{servicioActivo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    {/* Cambiado a max-w-7xl para ancho máximo de pantalla */}
    <div className="bg-white rounded-[3rem] max-w-7xl w-full max-h-[95vh] overflow-y-auto relative shadow-2xl p-6 md:p-16 border-8 border-[#FF00FF] animate-in zoom-in duration-300">
      <button 
        onClick={() => setServicioActivo(null)}
        className="absolute top-6 right-6 bg-black text-white w-12 h-12 rounded-full font-bold hover:bg-[#FF00FF] transition-all z-10 text-xl"
      >
        X
      </button>

      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-black text-black mb-2 uppercase italic leading-none">
          {servicioActivo.titulo}
        </h2>
        <p className="text-[#FF00FF] font-bold text-lg md:text-xl uppercase tracking-widest">Galería de Imagenes</p>
        <div className="h-2 w-32 bg-black mx-auto rounded-full mt-4"></div>
      </div>

      {/* Galería en 3 columnas para aprovechar el ancho 7xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {servicioActivo.fotos?.map((f: string, i: number) => (
          <div key={i} className="relative h-72 md:h-96 rounded-[2.5rem] overflow-hidden border-4 border-pink-50 shadow-xl group">
            <Image 
              src={f} 
              alt={`Galería ${i}`} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            {/* Overlay sutil al pasar el mouse */}
            <div className="absolute inset-0 bg-[#FF00FF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-[2rem] mb-10 text-center border-2 border-dashed border-gray-200">
        <p className="text-gray-700 font-bold text-xl leading-relaxed">
          {servicioActivo.descripcion}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa el servicio de: ${servicioActivo.titulo}`}
          target="_blank"
          className="block w-full bg-[#FF00FF] text-black text-center font-black py-7 rounded-[2rem] shadow-[0_10px_0_rgba(0,0,0,0.1)] hover:bg-black hover:text-[#FF00FF] transition-all uppercase text-2xl active:translate-y-2 active:shadow-none"
        >
          Consultar por WhatsApp 💬
        </a>
      </div>
    </div>
  </div>
)}
    </div>
  );
}