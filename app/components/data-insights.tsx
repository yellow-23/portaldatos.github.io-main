"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  CheckCircle,
  BarChart,
  Crown,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Adjust the import path as necessary

const insights = [
  {
    title: "Total Reportes",
    value: "1,205",
    change: "+2.3%",
    icon: FileText,
    color: "text-green-400",
  },
  {
    title: "Reportes Certificados",
    value: "77.97%",
    change: "+0.2%",
    icon: CheckCircle,
    color: "text-yellow-400",
  },
  {
    title: "Nivel de Madurez",
    value: "82%",
    change: "+1.5%",
    icon: BarChart,
    color: "text-purple-400",
    maturityLevel: 82, // Nivel de madurez
  },
  {
    title: "Reporte más popular",
    value: "Upskilling Datos",
    description:
      "Seguimiento del desarrollo de habilidades en análisis de datos y competencias digitales del personal.",
    lastUpdated: "17-01-25",
    responsible: "Carolina Rey de Duarte",
    change: "+12%",
    icon: Crown,
    color: "text-yellow-500",
  },
];

export default function DataInsights() {
  const mainMetrics = insights.slice(0, 3);
  const featuredReport = insights[3];

  return (
    <div className="flex flex-col gap-6">
      {/* Featured Report - Top, Full Width */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 
          rounded-xl p-8 border border-yellow-200 dark:border-yellow-900/50 
          shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-yellow-500/10">
              <Crown className="h-8 w-8 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {featuredReport.value}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Reporte mas usado
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="px-3 py-1 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 text-sm"
          >
            {featuredReport.change}
          </Badge>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
          {featuredReport.description}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Última actualización: {featuredReport.lastUpdated}
        </div>
      </motion.div>

      {/* Regular Metrics - Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mainMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-[#212121] rounded-xl p-6 border border-gray-200 dark:border-[#2A2A2A] shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-black/5 dark:bg-black/20">
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {metric.value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {metric.title}
            </p>
            {metric.maturityLevel && (
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.maturityLevel}%` }}
                  className="bg-purple-500 h-1.5 rounded-full"
                  transition={{ duration: 1 }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
