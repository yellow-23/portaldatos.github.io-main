"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, FileText, PieChart, Settings } from "lucide-react";

const tutorials = [
  {
    title: "Navegando por el Portal de Datos",
    description:
      "Aprende a acceder y utilizar los diferentes reportes disponibles en el portal de manera eficiente.",
    icon: FileText,
    videoId: "video1",
  },
  {
    title: "Demo Day - Buenas Prácticas Power Bi",
    description:
      "Guía detallada para entender y utilizar los indicadores clave de rendimiento en nuestros reportes.",
    icon: PieChart,
    videoId: "video2",
  },
  {
    title: "Mis Reportes",
    description: "​Como dejar visible los reportes del domino de datos",
    icon: Settings,
    videoId: "video3",
  },
];

export default function VideoTutorials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tutorials.map((tutorial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <div className="group bg-white dark:bg-[#212121] rounded-lg p-6 h-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[#2A2A2A] relative overflow-hidden shadow-sm border border-gray-200 dark:border-[#2A2A2A]">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#333333]">
                <tutorial.icon className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                  {tutorial.description}
                </p>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Play className="h-12 w-12 text-white" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
