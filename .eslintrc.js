// @ts-check

const OFF = 'off';
const ERROR = 'error';
const WARN = 'warn';

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['import'],
  extends: [
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'no-console': WARN,
    'no-debugger': WARN,
    'max-len': [
      ERROR,
      120,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    curly: ERROR,
    'no-implicit-coercion': ERROR,
    'no-else-return': ERROR,
    'no-duplicate-imports': [ERROR, { includeExports: true }],
    'import/first': ERROR,
    'import/no-mutable-exports': ERROR,
    'import/no-self-import': ERROR,
    'import/no-named-default': ERROR,
    'import/no-relative-packages': ERROR,
    'import/no-unresolved': OFF,
    'import/order': [
      ERROR,
      {
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '@nestjs/**', group: 'builtin', position: 'after' },
        ],
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'type',
          'index',
          'object',
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/no-cycle': OFF,
    'node/no-unsupported-features/es-syntax': OFF,
    'node/no-missing-import': OFF,
    'node/no-unpublished-import': OFF,
    'node/no-extraneous-import': OFF,
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      parserOptions: {
        ecmaVersion: 2022,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/no-empty-function': [
          ERROR,
          {
            allow: ['arrowFunctions'],
          },
        ],
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-unused-vars': [
          ERROR,
          {
            vars: 'local',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 5,
          },
        ],
        '@typescript-eslint/member-ordering': [
          ERROR,
          {
            default: [
              'static-field',
              'static-get',
              'static-set',
              'static-method',
              'protected-decorated-field',
              'private-decorated-field',
              'public-decorated-field',
              'protected-instance-field',
              'private-instance-field',
              'public-instance-field',
              'constructor',
              'instance-field',
              'abstract-field',
              'instance-get',
              'abstract-get',
              'instance-set',
              'abstract-set',
              'instance-method',
              'protected-instance-method',
              'private-instance-method',
              'abstract-method',
            ],
          },
        ],
        '@typescript-eslint/array-type': [
          ERROR,
          { default: 'generic', readonly: 'generic' },
        ],
        '@typescript-eslint/no-base-to-string': ERROR,
        '@typescript-eslint/prefer-regexp-exec': ERROR,
        '@typescript-eslint/consistent-generic-constructors': ERROR,
        '@typescript-eslint/prefer-nullish-coalescing': ERROR,
        '@typescript-eslint/prefer-optional-chain': ERROR,
        '@typescript-eslint/no-unsafe-declaration-merging': OFF,
        'no-return-await': OFF,
        '@typescript-eslint/return-await': [ERROR, 'always'],
      },
    },
    {
      files: ['*rc.js', '*.config.js'],
      rules: {},
    },
  ],
};
