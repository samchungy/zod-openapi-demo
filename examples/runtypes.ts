/* eslint-disable no-console */
/* eslint-disable new-cap */
import { Record, String } from 'runtypes';

const JobInputSchema = Record({
  hirerId: String,
  title: String.withConstraint((s) => s.length < 100),
});
declare const a: unknown;

const result = JobInputSchema.validate(a);

if (result.success) {
  console.log(result.value.hirerId);
}
