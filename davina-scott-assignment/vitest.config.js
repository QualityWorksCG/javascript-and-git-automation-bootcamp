import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
    test: {
        include: [...configDefaults.include, '**/*.{activity}.js'],
        exclude: [...configDefaults.exclude],
        globals: true,
        silent: false,
        setupFiles: ['../setup'],
    }
})