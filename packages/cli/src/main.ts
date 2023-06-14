#!/usr/bin/env node
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';
import * as path from 'path';
import * as fs from 'fs-extra';

const main = async () => {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Project name: `, name => {
    
    console.log(`Creating project ${name}...`);

    fs.mkdirSync(name);

    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const files = path.join(__dirname, 'template');

    try {
      fs.copySync(files, name, { overwrite: true })
      console.log('success!')
    } catch (err) {
      console.error(err)
    }

    readline.close();
  });
};

main();
