import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from 'node:fs';

const create = async () => {
  // Write your code here 
  const text = 'I am fresh and young';
  const destFile = 'fresh.txt';
  const __filename = fileURLToPath(import.meta.url);
  const dir = path.join(path.dirname(__filename), "files", destFile);

  open(dir, "r", async (err, fd) => {
    if (err) { //err cause file doesnt exist
      try {
        await writeFile(dir, text);
      } catch (err) {
        throw err; //any other error during writing
      }
      return
    }
    throw new Error('FS operation failed'); //file exists

  });
};

await create();
