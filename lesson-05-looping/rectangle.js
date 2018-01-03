'use strict'

// write drawEmptyRectangle function here

let i, j;
let str = '*';

function drawEmptyRectangle(x, y) {
    let result = '';
    let line = (str.repeat(x) + '\n');
    for (j = 0; j < y; j++) {
        if (j == 0 || j == y - 1) {
            result += line;
            console.log(result);
        }
        else {
            let emptyLine = '';

            for (i = 0; i < x; i++) {
                if (i == 0 || i == x - 1) {
                    emptyLine += '*';
                }
                else {
                    emptyLine += ' ';
                }
                //console.log(result);
            }
            result += emptyLine + '\n';
        }
    }
    console.log("For testing purpose only - Result of x:" + x + " y:" + y + " is:\n" + result);
    return result
}

//rectangle function
let str = '*';
let x, y, j, result;

function drawRectangle(x, y) {
    let result = '';
    let line = (str.repeat(x) + '\n');
    for (j = 0; j < y; j++) {
        result = result + line;
        console.log(result);
    }
    console.log("For testing purpose only - Result of x:" + x + " y:" + y + " is:\n" + result);
    return result;
}
