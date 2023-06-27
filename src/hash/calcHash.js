import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    // Write your code here 
    const srcFolder = "files";
    const srcFile = "fileToCalculateHashFor.txt";
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);
    const hash = createHash('sha256');

    //createReadStream(path.join(dir,srcFolder,srcFile)).pipe(hash).setEncoding('hex').pipe(process.stdout);
    createReadStream(path.join(dir, srcFolder, srcFile))
        .pipe(hash)
        .setEncoding('hex')
        .on("readable", () => {
            const data = hash.read();
            if (data) console.log(data);
        })
}
await calculateHash();
