"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, BarChart, Users } from "lucide-react";

const featuredReports = [
  {
    title: "GASTOS FIJOS PRESUPUESTO 2025",
    description:
      "Análisis detallado de gastos fijos y presupuestos para el año 2025. Incluye proyecciones y comparativas históricas.",
    icon: FileText,
    href: "/reports/gastos-fijos",
    details: {
      tipoReporte: "Power BI",
      actualizacion: "03-12-24",
      responsable: "Pablo Tomás Baeza Sepúlveda",
      negocio: "Empresas CMPC",
      area: "Transversal",
    },
  },
  {
    title: "GASTOS MATRICIALES CMPC",
    description:
      "Visualización completa de gastos matriciales con desglose por departamentos y categorías de costos.",
    icon: BarChart,
    href: "/reports/gastos-matriciales",
    details: {
      tipoReporte: "Power BI",
      actualizacion: "16-01-25",
      responsable: "BI & Analytics",
      negocio: "Empresas CMPC",
      area: "Transversal",
    },
  },
  {
    title: "UPSKILLING DATOS",
    description:
      "Seguimiento del desarrollo de habilidades en análisis de datos y competencias digitales del personal.",
    icon: Users,
    href: "/reports/upskilling-datos",
    details: {
      tipoReporte: "Power BI",
      actualizacion: "17-01-25",
      responsable: "Carolina Rey de Duarte",
      negocio: "Empresas CMPC",
      area: "Transversal",
    },
  },
];

export default function FeaturedReports() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredReports.map((report, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={report.href}>
            <div className="group bg-white dark:bg-[#212121] rounded-lg p-6 h-full transition-all duration-300 hover:bg-[#f5f5f5] dark:hover:bg-[#333333] border border-gray-200 dark:border-[#2A2A2A]">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg ">
                  <report.icon className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {report.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                    {report.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="mr-2">Última actualización:</span>
                      <span className="text-gray-700 dark:text-gray-400">
                        {report.details.actualizacion}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="mr-2">Responsable:</span>
                      <span className="text-gray-700 dark:text-gray-400">
                        {report.details.responsable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
