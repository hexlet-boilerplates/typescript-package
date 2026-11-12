# AGENTS.md

Шаблон пакета на TypeScript. Код лежит в `src/`, объявления типов в `types/`, тесты Vitest в `__tests__/`.

## Команды

| Команда | Что делает |
| --- | --- |
| `make install` | Ставит зависимости и git-хуки |
| `make develop` | Запускает `src/index.ts` через tsx |
| `make build` | Компилирует код в `dist/` |
| `make start` | Запускает собранный код |
| `make test` | Запускает тесты |
| `make test-coverage` | Запускает тесты с покрытием |
| `make typecheck` | Проверяет типы |
| `make lint` | Проверяет код через oxlint и oxfmt и запускает knip |
| `make lint-fix` | Исправляет форматирование и то, что oxlint умеет исправить сам |

## Проверки

`make lint` также проверяет Markdown (`rumdl`), опечатки (`typos`) и workflow GitHub Actions (`jactionlint`). knip ищет неиспользуемые файлы и зависимости и только сообщает о них, решение по находкам принимает человек. `make install` ставит git-хуки hk, перед коммитом они запускают `make lint`, перед push `make test`.

Перед завершением задачи запусти `make typecheck`, `make lint` и `make test`, все три должны проходить.

## Окружение

Инструменты и их версии задаёт `mise.toml`, ставит их `mise install`.
