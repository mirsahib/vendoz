
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['vendoz-production.up.railway.app']
  },
  env:{
    REACT_API_BASE_URL: 'https://vendoz-production.up.railway.app'
  }
}

module.exports = nextConfig
