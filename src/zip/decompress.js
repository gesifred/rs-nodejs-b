import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
    // Write your code here 
    const srcFolder = "files";
    const srcFile = "archive.gz";
    const dstFile = "fileToCompress.txt";
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);

    const gunzip = createGunzip();
    const compressed = createReadStream(path.join(dir, srcFolder, srcFile));
    const decompressed = createWriteStream(path.join(dir, srcFolder, dstFile));
    
    compressed.pipe(gunzip).pipe(decompressed);
};

await decompress();