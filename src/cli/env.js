const parseEnv = () => {
    // Write your code here 
    let result = "";
    for(let key of Object.keys(process.env)){
        if(key.match(/^RSS_/)){
            if (result.length!=0) result+="; "
            result+=`${key}=${process.env[key]}`;
            //console.log(`${key}=${process.env[key]}`);
        }
    }
    console.log(result);
};

parseEnv();
