"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type DocMode = "rust" | "nest";

interface DocModeContextValue {
  mode: DocMode;
  setMode: (mode: DocMode) => void;
}

const DocModeContext = createContext<DocModeContextValue>({
  mode: "rust",
  setMode: () => {},
});

export function useDocMode() {
  return useContext(DocModeContext);
}

const STORAGE_KEY = "toni-doc-mode";

export function DocModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DocMode>("rust");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "nest" || stored === "rust") {
      setModeState(stored);
    }
  }, []);

  function setMode(next: DocMode) {
    setModeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <DocModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DocModeContext.Provider>
  );
}
