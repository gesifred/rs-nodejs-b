import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
    // Write your code here 
    try {
        const srcFolder = "files";
        const fileToRead = "fileToRead.txt";
        const __filename = fileURLToPath(import.meta.url);
        const dir = path.dirname(__filename);
        const content = await readFile(path.join(dir, srcFolder, fileToRead), { encoding: "utf8" });
        console.log(content);
    } catch (err) {
        //console.log(err)
        if (err.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
    }
};

await read();
