"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Video,
  ChevronDown,
  ChevronUp,
  Clock,
} from "lucide-react";

const events = [
  {
    title: "Webinar: Innovaciones en TI",
    description:
      "Descubre las últimas tendencias en tecnología de la información y cómo pueden impactar tu negocio.",
    date: "2023-07-15",
    icon: Video,
    details:
      "Únete a nuestros expertos para explorar las innovaciones más recientes en IA, blockchain y computación cuántica.",
  },
  {
    title: "Taller: Optimización de Procesos",
    description:
      "Aprende técnicas avanzadas para mejorar la eficiencia en tus procesos de TI y reducir costos operativos.",
    date: "2023-07-22",
    icon: Users,
    details:
      "Participa en este taller práctico donde aprenderás metodologías ágiles y herramientas de automatización de vanguardia.",
  },
  {
    title: "Conferencia Anual de TI",
    description:
      "Únete a nosotros en nuestra conferencia anual de tecnología, el evento más importante del año en el sector.",
    date: "2023-08-05",
    icon: Calendar,
    details:
      "Networking, charlas inspiradoras y demostraciones de productos en el evento tecnológico del año. No te lo pierdas.",
  },
];

export default function UpcomingEvents() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white dark:bg-[#212121] rounded-lg p-6 shadow-sm h-full border border-gray-200 dark:border-[#2A2A2A]">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#333333]">
                  <Calendar className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
