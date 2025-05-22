#!/usr/bin/node
function factorial(a) {
    const num = parseInt(a);
    if ((isNaN(num))) {
        return 1;
        
    }else if(num <= 0){
        return 1;
    }       else{
        return num * factorial(num -1);
    }
    }
    const arg= process.argv[2];
    const result= factorial(arg);
    console.log(result);