/**
 * Bundle Analyzer Configuration
 * Verification (2025-01-XX): No existing bundle analyzer found in package.json or next.config.mjs.
 * Analyzer is enabled only when ANALYZE=true env var is set (off by default).
 */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers are now handled by middleware (src/middleware.ts)
  // This provides more flexibility and better control over request-level logic
};

export default withBundleAnalyzer(nextConfig);
