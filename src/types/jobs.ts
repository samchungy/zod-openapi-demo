import { z } from 'zod';

export interface Job {
  id: string;
  title: string;
  hirerId: string;
}

export type JobInput = z.infer<typeof JobInputSchema>;

export const JobInputSchema = z.object({
  hirerId: z.string(),
  title: z.string(),
});

export type JobOutput = z.infer<typeof JobOutputSchema>;

export const JobOutputSchema = z.object({
  hirerId: z.string(),
  title: z.string(),
  id: z.string().uuid(),
});
