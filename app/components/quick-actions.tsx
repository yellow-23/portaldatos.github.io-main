"use client";

import { motion } from "framer-motion";
import { FileText, BarChart2, Download, PlayCircle, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import { text } from "stream/consumers";

const actions = [
  {
    title: "Subir Reporte",
    description: "Sube tu reporte y compártelo con tu equipo.",
    icon: FileText,
    href: "/search-reports",
  },
  {
    title: "Explorar Datos",
    description: "Analiza datos y obtén información clave.",
    icon: BarChart2,
    href: "/data-exploration",
  },
  {
    title: "Descargar Reportes",
    description: "Accede a reportes y descárgalos en PDF o Excel.",
    icon: Download,
    href: "/download-reports",
  },
  {
    title: "Buscar Reportes",
    description: "Encuentra reportes relevantes para tu análisis.",
    icon: Text,
    href: "/video-tutorials",
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            className="w-full h-full bg-white dark:bg-[#212121] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] border-gray-200 dark:border-[#2A2A2A] text-left flex flex-col items-start p-4 space-y-2 shadow-sm rounded-lg transition-all duration-300"
          >
            <action.icon className="h-10 w-6 text-[#4CAF50] mb-2" />
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate w-full">
              {action.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 w-full">
              {action.description}
            </p>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
