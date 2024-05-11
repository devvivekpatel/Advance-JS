console.log("HIi, this is.");

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        console.log("*");
    }
    
}

function printPyramid(height) {
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

printPyramid(5);