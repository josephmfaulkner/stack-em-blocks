import { copy2dArray, newBlank2dArray } from "./misc";

const addBlockToGrid = function(block, gameGrid)
{

    let newGrid = copy2dArray(gameGrid);

    let blockData = block.blockData;
    let xOffset = block.xPos;
    let yOffset = block.yPos;

    for(let iY = 0; iY < blockData.length; iY++)
    {
        for(let iX = 0; iX < blockData[iY].length; iX++)
        {
            newGrid[yOffset + iY][xOffset + iX] = blockData[iY][iX] || newGrid[yOffset + iY][xOffset + iX]; 
        }
    }

    return newGrid;

}


const rowIsAllFilled = function(row)
{
    for(let i = 0; i < row.length; i++)
    {
        if(row[i] == 0) {return false;}
    }
    return true;
}
const clearRow = function(row)
{
    for(let i = 0; i < row.length; i++)
    {
        row[i] = 0;
    }
}

const clearFilledRows = function(gameGrid)
{
    let newGrid = copy2dArray(gameGrid);
    let scoredPoints = 0;
    for(let iY = 0; iY < newGrid.length; iY++)
    {
        if(rowIsAllFilled(newGrid[iY]))
        {
            clearRow(newGrid[iY]);
            scoredPoints++;
        }
    }
    return { newGrid, scoredPoints };
}


const rowIsAllBlank= function(row)
{
    for(let i = 0; i < row.length; i++)
    {
        if(row[i] != 0) {return false;}
    }
    return true;
}
const copyRowOver = function(source, target)
{
    for(let i = 0; i < source.length; i++)
    {
        target[i] = source[i];
    }
}

const shiftClearedRowsDown = function(gameGrid)
{
    let yDim = gameGrid.length; 
    let xDim = gameGrid[0].length;
    let newGrid = newBlank2dArray(xDim, yDim);

    let iYTarget = newGrid.length - 1;
    for(let iYSource = gameGrid.length - 1; iYSource >= 0; iYSource-- )
    {
        if(!rowIsAllBlank(gameGrid[iYSource]))
        {
            copyRowOver(gameGrid[iYSource], newGrid[iYTarget]);
            iYTarget--;
        }
    }

    return newGrid;
}

const isGameOver = function(gameGrid)
{

}


export { addBlockToGrid, clearFilledRows, shiftClearedRowsDown };