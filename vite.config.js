import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        build: {
            outDir: 'build',
        },
        plugins: [react()],
        define: {
            // By default, Vite doesn't include shims for NodeJS/
            // necessary for segment analytics lib to work
            'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
            'process.env.UPLOAD_SECRETKEY':JSON.stringify(env.UPLOAD_SECRETKEY),
            'process.env.GOOGLE_SECRETKEY':JSON.stringify(env.GOOGLE_SECRETKEY),
            global: 'window',
        },
        server: {
            port: 3000,
        },
    }
})
