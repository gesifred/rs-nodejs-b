import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { unlink } from 'node:fs/promises';

const remove = async () => {
    // Write your code here 
    try {
        const srcFolder = "files";
        const fileToRemove = "fileToRemove_copy.txt";
        const __filename = fileURLToPath(import.meta.url);
        const dir = path.dirname(__filename);
        await unlink(path.join(dir, srcFolder, fileToRemove))
    } catch (err) {
        //console.log(err);
        if (err.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
    }
};

await remove();
