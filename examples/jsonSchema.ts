/* eslint-disable no-console */
import Ajv from 'ajv';

const ajv = new Ajv();

const createJobInputSchema = {
  type: 'object',
  properties: {
    hirerId: {
      type: 'string',
    },
    title: {
      type: 'string',
      maxLength: 100,
    },
  },
  required: ['hirerId', 'title'],
} as const;

const validate = ajv.compile(createJobInputSchema);

declare const a: unknown;

if (validate(a)) {
  console.log(a.hirerId);
}
