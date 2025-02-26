"use client";

import { Suspense, lazy, FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Database, Search, Bell, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import LanguageSelector from "./components/language-selector";
import FeaturedReports from "./components/featured-reports";
import DataInsights from "./components/data-insights";
import QuickActions from "./components/quick-actions";
import { BadgeCheck } from "lucide-react";
import Image from "next/image"; // Añade esta importación al inicio del archivo
import logoImage from "../public/Logo-cmpc.svg.png"; // Añade esta importación al inicio del archivoi
import GroupSection from "./components/group_section";

// Definir tipos para los componentes lazy
const LazyNewsCarousel: FC = lazy(() => import("./components/news-carousel"));
const LazyVideoTutorials: FC = lazy(
  () => import("./components/video-tutorials")
);
const LazyUpcomingEvents: FC = lazy(
  () => import("./components/upcoming-events")
);
const LazyBestDomains: FC = lazy(() => import("./components/best-domains"));

// Definir el tipo para el LoadingSpinner
const LoadingSpinner: FC = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4CAF50]"></div>
  </div>
);

const Home: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors duration-300">
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-[#1A1A1A]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#2A2A2A]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-[#4CAF50]" aria-hidden="true" />
            <h1 className="text-2xl font-bold">Portal de Datos</h1>
          </div>
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Navegación principal"
          >
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-[#2A2A2A] border-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <Link
              href="/reports"
              className="text-gray-700 dark:text-white/80 hover:text-[#4CAF50] transition-colors"
            >
              Reportes
            </Link>
            <Link
              href="/news"
              className="text-gray-700 dark:text-white hover:text-[#4CAF50] transition-colors"
            >
              Noticias
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-white hover:text-[#4CAF50] transition-colors"
            >
              Sobre Nosotros
            </Link>
            <button
              title="Notifications"
              className="text-gray-700 dark:text-white/80 hover:text-[#4CAF50] transition-colors"
            >
              <Bell className="h-6 w-6" />
            </button>
            <button
              title="User Profile"
              className="text-gray-700 dark:text-white hover:text-[#4CAF50] transition-colors"
            >
              <User className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main Content */}
              <div className="flex flex-col items-start space-y-4">
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Text Content */}
                  <div className="flex flex-col">
                    <motion.h2
                      className="text-2xl md:text-3xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {/* Logo */}
                      <div className="rounded-2xl p-1 flex-shrink-0">
                        <Image
                          src={logoImage}
                          alt="Data Analytics Illustration"
                          width={100}
                          height={100}
                          className="object-contain rounded-xl"
                        />
                      </div>
                      Portal de Datos
                    </motion.h2>
                    <motion.p
                      className="text-base text-gray-700 dark:text-white/80 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Análisis avanzados para impulsar la innovación
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Data Insights */}
              <motion.div
                className="flex flex-col space-y-4 h-full justify-start pt-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <DataInsights />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 ">
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-12 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-3 py-1.5 text-sm mx-auto block w-fit"
            >
              Acciones Rápidas
            </Badge>
            <QuickActions />

            <Badge
              variant="outline"
              className="mt-12 mb-8 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-4 py-1.5 text-sm mx-auto block w-fit"
            >
              Agrupaciones
            </Badge>
            <GroupSection />

            <section className="mb-8">
              <Suspense fallback={<LoadingSpinner />}></Suspense>
            </section>
          </motion.section>
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-8 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-4 py-1.5 text-sm mx-auto block w-fit"
            >
              Reportes Destacados
            </Badge>
            <Suspense fallback={<div>Cargando reportes destacados...</div>}>
              <FeaturedReports />
            </Suspense>
          </motion.section>
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-8 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-4 py-1.5 text-sm mx-auto block w-fit"
            >
              Mejores Dominios{" "}
              <BadgeCheck className="inline-block h-5 w-5 ml-2 text-[#4CAF50]" />
            </Badge>
            <Suspense fallback={<LoadingSpinner />}>
              <LazyBestDomains />
            </Suspense>
          </motion.section>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-8 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-4 py-1.5 text-sm mx-auto block w-fit"
            >
              Últimas Noticias
            </Badge>
            <Suspense fallback={<LoadingSpinner />}>
              <LazyNewsCarousel />
            </Suspense>
          </motion.section>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-8 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-4 py-1.5 text-sm mx-auto block w-fit"
            >
              Tutoriales en Video
            </Badge>
            <Suspense fallback={<LoadingSpinner />}>
              <LazyVideoTutorials />
            </Suspense>
          </motion.section>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-8 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20 px-4 py-1.5 text-sm mx-auto block w-fit"
            >
              Próximos Eventos
            </Badge>
            <Suspense fallback={<LoadingSpinner />}>
              <LazyUpcomingEvents />
            </Suspense>
          </motion.section>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-[#212121] border-t border-gray-200 dark:border-[#2A2A2A] mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                Sobre Nosotros
              </h4>
              <p className="text-gray-600 dark:text-white/70">
                Impulsando la innovación y competitividad con datos para CMPC.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/reports"
                    className="text-gray-600 dark:text.white/70 hover:text-[#4CAF50] transition-colors"
                  >
                    Reportes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-600 dark:text.white/70 hover:text-[#4CAF50] transition-colors"
                  >
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-600 dark:text.white/70 hover:text-[#4CAF50] transition-colors"
                  >
                    Eventos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                Contacto
              </h4>
              <p className="text-gray-600 dark:text.white/70">
                Email: portal.datos@cmpc.cl
              </p>
              <p className="text-gray-600 dark:text.white/70">
                Teléfono: +56 2 2441 2000
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text.white/70">
              &copy; 2025 Portal de Datos CMPC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
