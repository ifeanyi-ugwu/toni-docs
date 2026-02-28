"use client";

import { useDocMode } from "@/context/doc-mode";

interface ModeNoteProps {
  rust: string;
  nest: string;
}

export function ModeNote({ rust, nest }: ModeNoteProps) {
  const { mode } = useDocMode();
  return <span>{mode === "nest" ? nest : rust}</span>;
}
