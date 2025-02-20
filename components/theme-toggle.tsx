"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 relative"
    >
      <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
};

export default ThemeToggle;
