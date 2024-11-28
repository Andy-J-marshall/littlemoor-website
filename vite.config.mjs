import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/littlemoor-website/', // TODO remove once the domain is set up
    plugins: [react()],
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.ts': 'tsx',
            },
        },
    },
});
