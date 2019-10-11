# eslint-config-recommended-plus-types
The spiritual successor to `eslint:recommended` for typescript.

## Installation
```
npm install eslint-config-recommended-plus-types --save-dev
yarn add eslint-config-recommended-plus-types --dev
```

This eslint config requires `@typescript-eslint/eslint-plugin` and
`@typescript-eslint/parser` as peer dependencies.

## Usage
```json
{
  "extends": [
    "eslint:recommended",
    "recommended-plus-types"
  ]
}
```

Because some of the included rules require type-checking, you must enable
certain parser options for rules to work.

```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

See [`@typescript-eslint`’s
documentation](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage)
for more information.

## Rationale
The default `eslint:recommended` config is remarkable for the fact that its
rules are almost universally agreed upon and seldom disabled. On the contrary,
the various “recommended” configs provided by the `@typescript-eslint` project
enable rules which disallow valid typescript features (`no-explicit-any`,
`no-non-null-assertion`), or worse, contravene the `eslint:recommended` config
by enabling rules which `eslint:recommended` does not (`camelcase`,
`no-array-constructor`, `prefer-const`, `require-await`, `no-empty-function`).
At the same time, using `eslint:recommended` with `@typscript-eslint/parser`
causes the `no-unused-vars` rule to emit false positives. The
`recommended-plus-types` config attempts to hew closer to the spirit and intent
of the `eslint:recommended` config by only enabling `@typescript-eslint` rules
which either fix rules found in `eslint:recommended` or otherwise are likely to
be universally agreed upon and seldom disabled. The following tests were used
to determine whether a rule merited inclusion:

1. The rule catches or prevents possible errors.
2. The rule only disallows code which is written unintentionally.
3. Any analogous eslint rules are included in `eslint:recommended`.

See [the code](./index.js) to see which rules from `@typescript-eslint` were
included.
