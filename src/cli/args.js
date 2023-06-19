const parseArgs = () => {
    // Write your code here 
    //console.log(process.argv);
    let result = "";
    let argsToProcess = process.argv.slice(2)
    for(let i =0; i<argsToProcess.length;i++){
        if (argsToProcess[i].match(/^--/)){
            if (result.length != 0) result+=", "
            result+=`${argsToProcess[i].slice(2)} is ${argsToProcess[i+1]}`;
        }
    }
    console.log(result);
};

parseArgs();
