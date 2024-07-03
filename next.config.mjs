/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    },
};

export default nextConfig;
