import fs from 'node:fs/promises';
import path from 'node:path';

import yaml from 'yaml';

import { schema } from 'src/schema/schema';

const run = async () => {
  const schemaYaml = yaml.stringify(schema, {
    aliasDuplicateObjects: false,
  });
  await fs.writeFile(
    path.join(__dirname, '../schema/openapi.yaml'),
    schemaYaml,
  );
};

run().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  throw error;
});
