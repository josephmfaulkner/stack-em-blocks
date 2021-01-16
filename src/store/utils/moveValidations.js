    import { rotateLeft, rotateRight } from "./blockActions";
    import { copyPlayerBlock } from "./misc";
 
    //boolean
    const isMoveOutOfBounds = function(gameGrid, playerBlock, xDir, yDir)
    {
        const blockData = playerBlock.blockData;
        const x = playerBlock.xPos;
        const y = playerBlock.yPos;

        if(gameGrid == null || gameGrid == undefined || blockData == null || blockData == undefined)
        {
            return true; 
        }
        
        const yBlockLimit = blockData.length - 1 + y;
        const xBlockLimit = blockData[0].length - 1 + x;
        
        if(y + yDir < 0) { return true; }
        if(x + xDir < 0) { return true; }

        if(yBlockLimit + yDir > gameGrid.length - 1) { return true; }
        if(xBlockLimit + xDir > gameGrid[0].length - 1) { return true; }
        
        return false;   
    }


    //boolean
    const isBlockCollision = function(gameGrid, playerBlock, xDir, yDir)
    {
        const blockData = playerBlock.blockData;
        const x = playerBlock.xPos;
        const y = playerBlock.yPos;

        if(gameGrid == null || gameGrid == undefined || blockData == null || blockData == undefined)
        {
            return true; 
        }

        let checkDirX = xDir; 
        let checkDirY = yDir;

        for(let yI = 0; yI < blockData.length; yI++)
        {
            for(let xI = 0; xI < blockData[yI].length; xI++)
            {
                if(blockData[yI][xI] <= 0) {continue};
                let checkY = yI + y + checkDirY;
                let checkX = xI + x + checkDirX; 
                
                if(
                    (checkY >= 0 && checkY < gameGrid.length)
                &&  (checkX >= 0 && checkX < gameGrid[0].length)
                )
                {
                    if(gameGrid[checkY][checkX] > 0)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    //boolean
    const canMoveDown = function(state)
    {
        const grid = state.grid;
        const playerBlock = state.playerBlock;
        if(isMoveOutOfBounds(grid, playerBlock, 0,1)) { return false;  }
        if(isBlockCollision(grid, playerBlock, 0,1) ) { return false; }
        return true;
    }

    //boolean
    const canMoveLeft = function(state)
    {
        const grid = state.grid;
        const playerBlock = state.playerBlock;
        if(isMoveOutOfBounds(grid, playerBlock, -1,0)) { return false;  }
        if(isBlockCollision(grid, playerBlock, -1,0) ) { return false; }
        return true;
    }

    //boolean
    const canMoveRight = function(state)
    {
        const grid = state.grid;
        let playerBlock = state.playerBlock;
        if(isMoveOutOfBounds(grid, playerBlock, 1,0)) { return false;  }
        if(isBlockCollision(grid, playerBlock, 1,0) ) { return false; }
        return true;
    }

    //boolean
    const canRotateLeft = function(state)
    {
        const grid = state.grid;
        let checkRotateLeft = rotateLeft(state.playerBlock);
        if(isMoveOutOfBounds(grid, checkRotateLeft , 0,0)) { return false;  }
        if(isBlockCollision(grid, checkRotateLeft , 0,0) ) { return false; }
        return true;
    }

    //boolean
    const canRotateRight = function(state)
    {
        const grid = state.grid;
        let checkRotateRight = rotateRight(state.playerBlock);
        if(isMoveOutOfBounds(grid, checkRotateRight , 0,0)) { return false;  }
        if(isBlockCollision(grid, checkRotateRight , 0,0) ) { return false; }
        return true;
    }

    /**
     * 
    grid: newBlank2dArray(10,20),
    playerBlock: {
        xPos: 0, 
        yPos: 0,
        blockData: null
    },
     * 
     */


export { 
    canMoveDown,
    canMoveLeft,
    canMoveRight,
    canRotateLeft, 
    canRotateRight 
};

