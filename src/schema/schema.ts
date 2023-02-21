import { OpenAPIGenerator } from '@asteasolutions/zod-to-openapi';

import { JobInputSchema, JobOutputSchema } from 'src/types/jobs';

import { registry } from './registry';

registry.registerComponent('securitySchemes', 's2sauth', {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  description: 'An s2s token issued by an allow listed consumer',
});

registry.registerPath({
  path: '/jobs',
  method: 'post',
  operationId: 'createJob',
  description: 'Create a job to be displayed on SEEK',
  summary: 'Create a Job',
  security: [],
  request: {
    body: {
      content: {
        'application/json': {
          schema: JobInputSchema,
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: JobOutputSchema,
        },
      },
    },
    '400': {
      description: 'Bad Request',
    },
  },
});

const generator = new OpenAPIGenerator(registry.definitions, '3.0.3');

export const schema = generator.generateDocument({
  info: {
    title: "Sam's Jobs API",
    version: '0.0.0',
    description: 'Hello #typescriptiication',
    license: {
      name: 'SEEK',
      url: 'http://example.com',
    },
  },
  servers: [
    {
      url: 'http://example.com/staging',
      description: 'Staging',
    },
    {
      url: 'http://example.com/prod',
      description: 'Prod',
    },
  ],
});
