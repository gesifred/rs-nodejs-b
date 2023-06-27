import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { copyFile, mkdir, readdir } from 'node:fs/promises';

const copy = async () => {
    // Write your code here 
    try {
        const srcFolder = "files";
        const dstFolder = "files_copy";
        const __filename = fileURLToPath(import.meta.url);
        const dir = path.dirname(__filename);
        const files = await readdir(path.join(dir, srcFolder));
        await mkdir(path.join(dir, "files_copy"));
        for (const file of files) {
            await copyFile(path.join(dir, srcFolder, file), path.join(dir, dstFolder, file));
        }
    } catch (err) {
        //console.log(err);        
        if (err.code === "ENOENT" || err.code === "EEXIST") {
            throw new Error("FS operation failed");
        }
    }
};

await copy();
