module.exports = { 
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'react',
    'import',
  ],
  extends: [
    // './node_modules/jslint-configs/config-react.js',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    // All rules are copied from Jslint-config plugin
    // React
    'react/display-name': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-indent': [2, 2 ],
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': ['error', {
      component: true,
      html: false,
    } ],
    'react/sort-comp': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-curly-spacing': [2, {
      when: 'always',
      children: true,
      spacing: {
        objectLiterals: 'always',
      },
    } ],
    'react/jsx-no-bind': [2, {
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: true,
    } ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
    'react-hooks/exhaustive-deps': 0,
    'keyword-spacing': [2, { before: true, after: true }],
    'no-nested-ternary': 1,
    'react/no-render-return-value': 0,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
    ],
    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'arrow-parens': ['error', 'always'],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-body-style': ['error', 'as-needed'],
    'max-len': ['error', { 'code': 120 }],
    'import/order':[
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroups': [
          {
            'pattern': '~/**',
            'group': 'external',
            'position': 'after'
          }
        ],
      }
    ]
  }
};
