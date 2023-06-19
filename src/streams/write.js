import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    // Write your code here 
    const dstFolder = "files";
    const dstFile = "fileToWrite.txt";
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);
    const writableFile = createWriteStream(path.join(dir,dstFolder,dstFile));
    process.stdin.pipe(writableFile);
};

await write();