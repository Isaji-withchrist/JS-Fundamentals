const size= parseInt(process.argv[2]);
if (isNaN(size)) {
    console.log('Missing size');
    
}else{
    let row= 0;
    while (row<size) {
        let line ="";
        let col =0;
        while (col<size) {
            line +="x";
            col++;
            
        }
        console.log(line);
        row++;
    }
}