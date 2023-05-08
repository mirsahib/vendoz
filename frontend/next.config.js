
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['localhost']
  },
  env:{
    REACT_API_BASE_URL: 'http://localhost:1337'
  }
}

module.exports = nextConfig
