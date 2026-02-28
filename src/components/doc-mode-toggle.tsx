"use client";

import { useDocMode } from "@/context/doc-mode";

export function DocModeToggle() {
  const { mode, setMode } = useDocMode();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-fd-border bg-fd-muted p-0.5 text-xs font-medium"
      role="group"
      aria-label="Documentation mode"
    >
      <button
        onClick={() => setMode("rust")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${
          mode === "rust"
            ? "bg-fd-background text-fd-foreground shadow-sm"
            : "text-fd-muted-foreground hover:text-fd-foreground"
        }`}
        aria-pressed={mode === "rust"}
      >
        <span aria-hidden>🦀</span>
        Rust
      </button>
      <button
        onClick={() => setMode("nest")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${
          mode === "nest"
            ? "bg-fd-background text-fd-foreground shadow-sm"
            : "text-fd-muted-foreground hover:text-fd-foreground"
        }`}
        aria-pressed={mode === "nest"}
      >
        <span aria-hidden>⚡</span>
        NestJS
      </button>
    </div>
  );
}
