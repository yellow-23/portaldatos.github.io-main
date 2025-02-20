"use client";

import { motion } from "framer-motion";
import { Laptop, ShoppingBag, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const groupings = [
  {
    title: "Tecnología",
    description: "Informes y análisis sobre tecnología en la empresa.",
    icon: Laptop,
    href: "/reports/technology",
  },
  {
    title: "Ventas",
    description: "Datos y tendencias sobre ventas y mercado.",
    icon: ShoppingBag,
    href: "/reports/sales",
  },
  {
    title: "Operaciones",
    description: "Gestión y mejoras en operaciones internas.",
    icon: Settings,
    href: "/reports/operations",
  },
];

export default function GroupSection() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupings.map((group, index) => (
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
              <group.icon className="h-6 w-6 text-[#4CAF50] mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate w-full">
                {group.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 w-full">
                {group.description}
              </p>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
