import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    // Тестовые файлы
    include: ['**/__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      // Папка для отчётов
      reportsDirectory: 'coverage',
      reporter: ['json', 'lcov', 'text', 'clover'],
      // Какие файлы включать в покрытие. Точка входа (index.ts) исключена:
      // её не тестируют, а на маленьком проекте она одна тянет покрытие вниз
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts'],
      // Порог покрытия: ниже него `make test-coverage` падает,
      // и сборка в CI краснеет вместе с ним
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
})
