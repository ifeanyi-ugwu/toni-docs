import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Bridge } from "@/components/mdx/bridge";
import { Native } from "@/components/mdx/native";
import { CodeCompare } from "@/components/mdx/code-compare";
import { ModeNote } from "@/components/mdx/mode-note";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Bridge,
    Native,
    CodeCompare,
    ModeNote,
    ...components,
  };
}
