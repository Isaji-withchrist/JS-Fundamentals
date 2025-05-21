const {argv}= require('node:process');
    if(argv.length>2)
        {
        console.log("Arguments found:");
        argv.slice(2).forEach(val, index); {
        console.log('${index}: ${val}');
        }
        }
    else{console.log('No arguments found.');}