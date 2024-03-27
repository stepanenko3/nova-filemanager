import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const config = {
    tool: {
        entry: resolve(__dirname, 'resources/js/tool.js'),
        name: 'tool',
        fileName: () => 'js/tool.js',
        formats: ["umd"],
    },
    package: {
        entry: resolve(__dirname, 'resources/js/package.js'),
        name: 'package',
        fileName: () => 'js/package.js',
        formats: ["es"],
    }
}

const currentConfig = process.env.LIB_NAME
    ? config[process.env.LIB_NAME]
    : config.tool;

export default defineConfig({
    plugins: [vue()],

    define: {
        "process.env": process.env, // Vite ditched process.env, so we need to pass it in
    },

    resolve: {
        alias: [
            {
                find: 'laravel-nova',
                replacement: resolve(
                    __dirname,
                    'vendor/laravel/nova/resources/js/mixins/packages.js'
                ),
            }
        ]
    },

    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: false,
        target: "ES2022",
        minify: true,
        manifest: true,
        lib: {
            ...currentConfig,
        },
        rollupOptions: {
            input: currentConfig.entry,
            external: ["vue", "laravel-nova"],
            output: {
                globals: {
                    vue: "Vue",
                    nova: "Nova",
                    "laravel-nova": "LaravelNova"
                },
                assetFileNames: "css/tool.css"
            }
        },
    },

    optimizeDeps: {
        include: ["vue", "@inertiajs/inertia", "@inertiajs/inertia-vue3", "axios"],
    },
});
