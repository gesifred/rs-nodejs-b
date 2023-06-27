import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    // Write your code here 
    const srcFolder = "files";
    const srcFile = "fileToRead.txt";
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);
    createReadStream(path.join(dir,srcFolder,srcFile)).pipe(process.stdout);

};

await read();