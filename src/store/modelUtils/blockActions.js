import { newBlank2dArray } from "./misc";

const rotateLeft = function(block){
    
    if (block.length <= 0) { return [[]];}

    const yLen = block.length; 
    const xLen = block[0].length;

    let newArray = newBlank2dArray(yLen,xLen);
    for(let y = 0; y < block.length; y++)
    {
        let row = block[y];
        for(let x = 0; x < row.length; x++)
        {
            const newX = y;
            const newY = (row.length - 1 ) - x;
            newArray[newY][newX] = block[y][x];
        }
    }
    return newArray;
}

const rotateRight = function(block){
    
    if (block.length <= 0) { return [[]];}

    const yLen = block.length; 
    const xLen = block[0].length;

    let newArray = newBlank2dArray(yLen,xLen);
    for(let y = 0; y < block.length; y++)
    {
        let row = block[y];
        for(let x = 0; x < row.length; x++)
        {
            const newX = (block.length - 1) - y;
            const newY = x;
            newArray[newY][newX] = block[y][x];
        }
    }
    return newArray;
}

export {rotateLeft, rotateRight};