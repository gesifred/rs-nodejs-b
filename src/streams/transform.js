import { Transform } from 'node:stream';

const transform = async () => {
    // Write your code here 
      const reverseTransform = new Transform({
        construct(cb){
            this.data = "";
            cb();
        },
        transform(chunk, encoding, cb) {
          this.data += chunk;
          cb();
        },
        flush(cb){
            this.push(this.data.split("").reverse().join(""));
            cb();
        }
      });
      process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();