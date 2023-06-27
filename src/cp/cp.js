import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    // Write your code here
    const srcFolder = "files";
    const command = "script.js";
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);

    const child = spawn(`node`, [path.join(dir, srcFolder, command), ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.on('data', (data) => {
        //child process stdout should send data to master process stdout
        process.stdout.write(data);
    });
    child.stderr.on('data', (data) => {
        //child process stdout should send data to master process stdout
        process.stderr.write(`child stderr:\n ${data}-- end child error\n`);
    });
    child.on('close', (code) => {
        process.stdout.write(`\nchild process exited with code ${code}\n`)
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'some3']);


/*

    cp.js - implement function spawnChildProcess that receives array of
     arguments args and creates child process from file script.js, passing these args to it.
     This function should create IPC-channel between stdin and stdout of master process and child process:
        child process stdin should receive input from master process stdin
        child process stdout should send data to master process stdout
*/