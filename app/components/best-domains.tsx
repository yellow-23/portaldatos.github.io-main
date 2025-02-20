"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, User, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; // Agregado para la barra de progreso

const maturityLevels: Record<"low" | "medium" | "high", string> = {
  low: "Necesita mejoras en la calidad y accesibilidad.",
  medium: "Buen desempeño, pero con áreas de oportunidad.",
  high: "Óptima madurez, alineado con las mejores prácticas.",
};

const maturityColors: Record<"low" | "medium" | "high", string> = {
  low: "bg-red-500", // Rojo para bajo
  medium: "bg-yellow-500", // Amarillo para medio
  high: "bg-green-500", // Verde para alto
};

const DomainSummary = ({ level }: { level: "low" | "medium" | "high" }) => {
  return (
    <div className="text-gray-600 dark:text-white/70 text-sm">
      {maturityLevels[level]}
    </div>
  );
};

const bestDomains = [
  {
    name: "Datos & Arquitectura - Empresas",
    dataOwner: "Christian Mengers",
    dataSteward: ["Carolina Rey", " - Daniela Fierro", " - Liber Araya"],
    kpi: 90,
    maturity: "high" as "high",
    score: { value: 4.5, max: 5 },
  },
  {
    name: "Bosques - Brasil",
    dataOwner: "José Luiz Bazzo",
    dataSteward: ["Douglas De Souza", " - Edemar Faria Pereira"],
    kpi: 75,
    maturity: "medium" as "medium",
    score: { value: 3.8, max: 5 },
  },
  {
    name: "S&OP - Celulosa",
    dataOwner: "Christopher Spoerer",
    dataSteward: [
      "Jorge Navarrete",
      " - Ricardo Gonzales",
      " - Sebastián Zuñiga",
      " - Mauricio Fuentes",
    ],
    kpi: 50,
    maturity: "low" as "low",
    score: { value: 3.5, max: 5 },
  },
];

const DomainMarketplace = () => {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {bestDomains.map((domain) => (
        <Card
          key={domain.name}
          onMouseEnter={() => setHoveredDomain(domain.name)}
          onMouseLeave={() => setHoveredDomain(null)}
          className="relative shadow-sm hover:shadow-md transition 
            bg-gray-50 dark:bg-[#212121] 
            border border-gray-200 dark:border-[#2A2A2A] 
            overflow-hidden"
        >
          <CardHeader className="relative p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {domain.name}
            </h3>
          </CardHeader>
          <CardContent className="p-4">
            {hoveredDomain === domain.name ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-[#4CAF50]" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Data Owner
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      {domain.dataOwner}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#4CAF50]" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Data Steward
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      {domain.dataSteward.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <DomainSummary level={domain.maturity} />
                </div>

                {/* Línea de progreso con color dinámico según la madurez */}
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Nivel de Madurez
                  </p>
                  <div className="relative w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className={`h-4 rounded-full ${
                        maturityColors[domain.maturity]
                      } relative flex items-center`}
                      style={{
                        width: `${
                          (domain.score.value / domain.score.max) * 100
                        }%`,
                      }}
                    >
                      {/* Número en badge con borde gris oscuro y posición final */}
                      <span
                        className="absolute top-1/2 -translate-y-1/2 text-xs font-bold px-2 py-0.5 rounded-lg shadow-md border border-gray-800"
                        style={{
                          backgroundColor:
                            domain.maturity === "high"
                              ? "rgba(45, 106, 79, 0.9)" // Verde oscuro translúcido
                              : domain.maturity === "medium"
                              ? "rgba(180, 83, 9, 0.9)" // Naranja oscuro translúcido
                              : "rgba(153, 27, 27, 0.9)", // Rojo oscuro translúcido
                          color: "#fff", // Texto blanco para contraste
                          right: "-10px", // Lo coloca justo al final de la línea
                        }}
                      >
                        {Math.round(
                          (domain.score.value / domain.score.max) * 100
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pasa el mouse para más detalles...
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DomainMarketplace;
