import { newBlank2dArray } from "./misc";

const rotateLeft = function(playerBlock){
    
    const block = playerBlock.blockData;
    let newPosX = playerBlock.xPos;
    let newPosY = playerBlock.yPos;

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

    return { 
        blockData: newArray,
        xPos: newPosX,
        yPos: newPosY
    };
}

const rotateRight = function(playerBlock){
    
    const block = playerBlock.blockData;
    let newPosX = playerBlock.xPos;
    let newPosY = playerBlock.yPos;

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

    return { 
        blockData: newArray,
        xPos: newPosX,
        yPos: newPosY
    };
}

export {rotateLeft, rotateRight};