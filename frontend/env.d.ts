declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_API_TOKEN: string
            REACT_API_BASE_URL: string
            REACT_API_URL: string
            REACT_JWT_SECRET: string
        }
    }
}

export { };
