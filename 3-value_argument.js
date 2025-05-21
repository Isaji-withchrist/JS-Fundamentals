#!/usr/bin/env node
function printFirstArgument(args){
    if(args[2]){
        console.log(args[2]);
    }else{
        console.log('No argument');
    }
}
printFirstArgument(process.argv);