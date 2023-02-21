module.exports = {
  extends: ['skuba'],
  plugins: ['eslint-plugin-zod-to-openapi'],
  overrides: [
    {
      files: ['src/types/jobs.ts'],
      rules: {
        'zod-to-openapi/require-openapi': 'error',
        'zod-to-openapi/require-comment': 'error',
        'zod-to-openapi/require-example': 'error',
        'zod-to-openapi/prefer-openapi-last': 'error',
        'zod-to-openapi/prefer-zod-default': 'error',
      },
    },
  ],
};
