import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

// Pages that moved when the one-page chapters were absorbed and chapter
// landing pages were normalised to index.mdx. Anything already linking to the
// old URL keeps working.
const MOVED: Record<string, string> = {
  "/docs/security/cors": "/docs/techniques/cors",
  "/docs/lifecycle-hooks": "/docs/core-concepts/lifecycle-hooks",
  "/docs/http-adapters/overview": "/docs/http-adapters",
  "/docs/microservices/overview": "/docs/microservices",
  "/docs/grpc/overview": "/docs/grpc",
  "/docs/graphql/overview": "/docs/graphql",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(MOVED).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
