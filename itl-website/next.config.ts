import type { NextConfig } from "next";
import legacyRedirects from "./src/lib/legacy/redirects.json";

const nextConfig: NextConfig = {
  // Legacy URL redirects from genetargeting.com
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      source: redirect.source,
      destination: redirect.destination,
      permanent: redirect.permanent,
    }));
  },
};

export default nextConfig;
