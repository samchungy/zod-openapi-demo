import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

import { registry } from 'src/schema/registry';
extendZodWithOpenApi(z);

export interface Job {
  id: string;

  hirer: {
    id: string;
  };
}

export type JobInput = z.infer<typeof JobInputSchema>;

/**
 * Hirer Details
 */
const HirerDetailsSchema = registry.register(
  'hirerDetails',
  z
    .object({
      /**
       * SEEK ID
       * @example "60002023"
       */
      id: z.string().openapi({ description: 'SEEK ID', example: '60002023' }),
    })
    .openapi({ description: 'Hirer Details', type: 'boolean' }),
);

export const JobInputSchema = z.object({
  /**
   * Hirer Details
   */
  hirer: HirerDetailsSchema,
  /**
   * Name of job visible in job search
   * @example "#typescriptification host"
   */
  title: z.string().max(100).openapi({
    description: 'Name of job visible in job search',
    example: '#typescriptification host',
  }),
  /**
   * Metadata
   */
  metadata: z
    .object({
      /**
       * @deprecated Performance of the ad 3
       * @example "A"
       */
      performanceTier: z.enum(['A', 'B', 'C']).openapi({
        description: 'Performance of the ad 3',
        example: 'A',
        deprecated: true,
      }),
    })
    .openapi({ description: 'Metadata' }),
});

const job: JobInput = {
  hirer: {
    id: '1234',
  },
  title: 'host',
  metadata: {
    performanceTier: 'A',
  },
};

export type JobOutput = z.infer<typeof JobOutputSchema>;

export const JobOutputSchema = z.object({
  id: z.string().uuid(),
  /**
   * Hirer Details
   */
  hirer: HirerDetailsSchema,
});
