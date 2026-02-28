"use client";

import { useDocMode } from "@/context/doc-mode";
import type { ReactNode } from "react";

export function Native({ children }: { children: ReactNode }) {
  const { mode } = useDocMode();
  if (mode !== "rust") return null;
  return <>{children}</>;
}
