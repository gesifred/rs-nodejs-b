import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
    // Write your code here 
    const srcFolder = "files";
    const srcFile = "fileToCompress.txt";
    const dstFile = "archive.gz"
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);

    const gzip = createGzip();
    const origin = createReadStream(path.join(dir, srcFolder, srcFile));
    const compressed = createWriteStream(path.join(dir, srcFolder, dstFile));

    origin.pipe(gzip).pipe(compressed);
};

await compress();