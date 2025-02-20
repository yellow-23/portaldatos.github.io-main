"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";

const news = [
  {
    title: "Nuevo sistema de monitoreo implementado",
    description:
      "Hemos mejorado significativamente nuestra capacidad de detección y respuesta con la implementación de un sistema de monitoreo de última generación. Este avance permite una supervisión más precisa y eficiente de todos nuestros procesos críticos.",
    date: "2023-06-15",
    author: "Equipo de Infraestructura",
  },
  {
    title: "Actualización de seguridad crítica",
    description:
      "Se ha completado una actualización importante de seguridad en toda nuestra infraestructura. Esta actualización incluye parches críticos y mejoras significativas en nuestros protocolos de protección de datos.",
    date: "2023-06-10",
    author: "Equipo de Seguridad",
  },
  {
    title: "Webinar: Mejores prácticas en infraestructura TI",
    description:
      "Únete a nuestros expertos en un webinar exclusivo donde compartiremos las mejores prácticas y estrategias para optimizar la infraestructura TI. Aprende sobre las últimas tendencias y soluciones innovadoras.",
    date: "2023-06-05",
    author: "Equipo de Capacitación",
  },
];

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <div className="relative">
      <div className="relative h-[300px] overflow-hidden">
        <AnimatePresence initial={false} custom={current}>
          {news.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 ${
                index === current ? "z-10" : "z-0"
              }`}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === current ? 1 : 0,
                x: index === current ? 0 : -100,
              }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-[#212121] h-full rounded-lg p-6 shadow-sm border border-gray-200 dark:border-[#2A2A2A]">
                <div className="flex items-start space-x-4">
                  <Newspaper className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="mr-2">Fecha:</span>
                      <span className="text-gray-700 dark:text-gray-400">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="mr-2">Autor:</span>
                      <span className="text-gray-700 dark:text-gray-400">
                        {item.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 z-20 p-2 transition-transform hover:scale-125"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 z-20 p-2 transition-transform hover:scale-125"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-600 dark:text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-[#4CAF50]" : "bg-[#333333]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
