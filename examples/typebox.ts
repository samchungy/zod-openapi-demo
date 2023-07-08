/* eslint-disable no-console */
/* eslint-disable new-cap */
import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

const JobInputSchema = Type.Object({
  hirerId: Type.String(),
  title: Type.String({
    maxLength: 100,
  }),
});
console.log(JSON.stringify(JobInputSchema, null, 2));

declare const a: unknown;

if (Value.Check(JobInputSchema, a)) {
  console.log(a.hirerId);
}
