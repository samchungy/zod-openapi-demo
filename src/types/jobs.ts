import { z } from 'zod';

export interface Job {
  id: string;

  hirer: {
    id: string;
  };
}

export type JobInput = z.infer<typeof JobInputSchema>;

export const JobInputSchema = z.object({
  hirer: z.object({
    id: z.string(),
  }),
});

export type JobOutput = z.infer<typeof JobOutputSchema>;

export const JobOutputSchema = z.object({
  id: z.string().uuid(),
  hirer: z.object({
    id: z.string(),
  }),
});