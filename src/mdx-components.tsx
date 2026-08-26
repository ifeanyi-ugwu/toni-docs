import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import type { MDXComponents } from "mdx/types";
import { FromNest } from "@/components/mdx/from-nest";
import { RequestPipeline } from "@/components/mdx/pipeline";

// Card, Cards, and Callout already arrive through defaultMdxComponents.
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tabs,
    Tab,
    Steps,
    Step,
    FromNest,
    RequestPipeline,
    ...components,
  };
}
