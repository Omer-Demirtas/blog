"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { AppStateProvider } from "./AppStateContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <AppStateProvider>
        {children}
      </AppStateProvider>
    </ThemeProvider>
  );
} 