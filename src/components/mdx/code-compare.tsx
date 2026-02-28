"use client";

import { useDocMode } from "@/context/doc-mode";
import type { ReactNode } from "react";

interface CodeCompareProps {
  nest: ReactNode;
  rust: ReactNode;
}

export function CodeCompare({ nest, rust }: CodeCompareProps) {
  const { mode } = useDocMode();
  if (mode !== "nest") return null;

  return (
    <div className="not-prose my-4 overflow-hidden rounded-lg border border-fd-border">
      <div className="grid grid-cols-2 divide-x divide-fd-border">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted px-4 py-2 text-xs font-medium text-fd-muted-foreground">
            <span className="text-yellow-500">⚡</span>
            NestJS (TypeScript)
          </div>
          <div className="overflow-auto p-0 [&_pre]:m-0 [&_pre]:rounded-none [&_pre]:border-0">
            {nest}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted px-4 py-2 text-xs font-medium text-fd-muted-foreground">
            <span>🦀</span>
            Toni (Rust)
          </div>
          <div className="overflow-auto p-0 [&_pre]:m-0 [&_pre]:rounded-none [&_pre]:border-0">
            {rust}
          </div>
        </div>
      </div>
    </div>
  );
}
