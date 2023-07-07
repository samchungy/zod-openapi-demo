import { createDocument } from 'zod-openapi';

import { JobInputSchema, JobOutputSchema } from 'src/types/jobs';

export const schema = createDocument({
  openapi: '3.0.3',
  components: {
    securitySchemes: {
      s2sauth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'An s2s token issued by an allow listed consumer',
      },
    },
  },
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
  paths: {
    '/jobs': {
      post: {
        operationId: 'createJob',
        description: 'Create a job to be displayed on SEEK',
        summary: 'Create a Job',
        security: [],
        requestBody: {
          content: {
            'application/json': {
              schema: JobInputSchema,
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
      },
    },
  },
});
