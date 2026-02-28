"use client";

import { useDocMode } from "@/context/doc-mode";
import type { ReactNode } from "react";

export function Bridge({ children }: { children: ReactNode }) {
  const { mode } = useDocMode();
  if (mode !== "nest") return null;
  return <>{children}</>;
}
