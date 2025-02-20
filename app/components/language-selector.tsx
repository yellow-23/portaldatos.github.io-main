"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("es");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-white dark:bg-[#212121] border-gray-200 dark:border-[#2A2A2A] text-gray-900 dark:text-white hover:text-[#4CAF50] dark:hover:text-[#4CAF50]"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : "Seleccionar idioma..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white dark:bg-[#212121] border-gray-200 dark:border-[#2A2A2A]">
        <Command className="bg-white dark:bg-[#212121]">
          <CommandInput
            placeholder="Buscar idioma..."
            className="text-gray-900 dark:text-white"
          />
          <CommandEmpty className="text-gray-900 dark:text-white">
            No se encontró el idioma.
          </CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2A2A2A] hover:text-[#4CAF50]"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
