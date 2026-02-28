"use client";

import { useDocMode } from "@/context/doc-mode";

export function BridgeBanner() {
  const { mode } = useDocMode();
  if (mode !== "nest") return null;

  return (
    <div className="flex items-center gap-2 border-b border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300">
      <span aria-hidden>⚡</span>
      NestJS Bridge mode — comparisons with NestJS/TypeScript are shown on this
      page.
    </div>
  );
}
