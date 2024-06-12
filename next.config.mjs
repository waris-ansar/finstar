import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  },
}

export default withMDX(nextConfig)
