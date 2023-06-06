
/** @type {import('next').NextConfig} */
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`),
})


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
