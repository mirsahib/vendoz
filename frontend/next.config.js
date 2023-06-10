
/** @type {import('next').NextConfig} */
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`),
})



const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['172.30.0.2']
  },
  env:{
    REACT_API_BASE_URL: 'http://172.30.0.2:1337'
  }
}
 
module.exports = nextConfig
