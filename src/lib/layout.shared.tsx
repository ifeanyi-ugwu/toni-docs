import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { DocModeToggle } from "@/components/doc-mode-toggle";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold tracking-tight">
          <span className="text-fd-primary">toni</span>
        </span>
      ),
      children: <DocModeToggle />,
    },
    githubUrl: "https://github.com/ifeanyi-ugwu/toni-rs",
  };
}
