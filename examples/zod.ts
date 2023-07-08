/* eslint-disable no-console */
import { z } from 'zod';

const JobInputSchema = z.object({
  hirerId: z.string(),
  title: z.string().max(100),
});

declare const a: unknown;

const result = JobInputSchema.safeParse(a);

if (result.success) {
  console.log(result.data.hirerId);
}
