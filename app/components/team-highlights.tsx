"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

const teamHighlights = [
  {
    name: "Ana Rodríguez",
    achievement: "Lideró el proyecto de migración a la nube",
    description:
      "Ana dirigió con éxito la migración de nuestros sistemas principales a la nube, mejorando la eficiencia y reduciendo costos.",
    color: "#00C853",
  },
  {
    name: "Carlos Mendoza",
    achievement: "Implementó un nuevo sistema de seguridad",
    description:
      "Carlos diseñó e implementó un nuevo sistema de seguridad que ha reducido significativamente nuestras vulnerabilidades.",
    color: "#4FC3F7",
  },
  {
    name: "Laura Sánchez",
    achievement: "Optimizó el rendimiento de la base de datos",
    description:
      "Laura logró una mejora del 40% en el rendimiento de nuestra base de datos principal a través de técnicas avanzadas de optimización.",
    color: "#FFB74D",
  },
];

export default function TeamHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHighlight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamHighlights.length);
  };

  const prevHighlight = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + teamHighlights.length) % teamHighlights.length
    );
  };

  return (
    <div className="relative">
      <Card
        className="bg-gray-900 shadow-lg border-t-4"
        style={{ borderColor: teamHighlights[currentIndex].color }}
      >
        <CardHeader>
          <CardTitle
            className="text-2xl font-bold text-center"
            style={{ color: teamHighlights[currentIndex].color }}
          >
            {teamHighlights[currentIndex].name}
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            {teamHighlights[currentIndex].achievement}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-4">
            <Award
              className="h-16 w-16"
              style={{ color: teamHighlights[currentIndex].color }}
            />
          </div>
          <p className="text-center text-gray-300">
            {teamHighlights[currentIndex].description}
          </p>
        </CardContent>
      </Card>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 shadow-lg"
        onClick={prevHighlight}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 shadow-lg"
        onClick={nextHighlight}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
