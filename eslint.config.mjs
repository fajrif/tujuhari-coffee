import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  {
    rules: {
      // images.unoptimized is set in next.config.mjs for static export-style
      // hosting, so plain <img> tags are used intentionally instead of next/image.
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
