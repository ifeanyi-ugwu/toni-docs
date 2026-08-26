import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold tracking-tight">
          <span className="text-fd-primary">toni</span>
        </span>
      ),
    },
    githubUrl: "https://github.com/ifeanyi-ugwu/toni-rs",
  };
}
