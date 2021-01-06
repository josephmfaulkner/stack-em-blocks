import { getRandomBlock } from "../modelUtils/block";
import { rotateLeft, rotateRight } from "../modelUtils/blockActions";

export default class Block {
    constructor(gameGrid, blockData = getRandomBlock(), x = null, y = null)
    {
        this.gameGrid = gameGrid; 
        this.blockData = blockData;

        if(x == null){ this.x = (this.gameGrid[0].length / 2) - 1;}
        if(y == null){ this.y = 0; }
    }

    //boolean
    isMoveOutOfBounds(blockData, xDir, yDir)
    {
        const yBlockLimit = blockData.length - 1 + this.y;
        const xBlockLimit = blockData[0].length - 1 + this.x;
        
        if(this.y + yDir < 0) { return true; }
        if(this.x + xDir < 0) { return true; }

        if(yBlockLimit + yDir > this.gameGrid.length - 1) { return true; }
        if(xBlockLimit + xDir > this.gameGrid[0].length - 1) { return true; }
        
        return false;   
    }


    //boolean
    isBlockCollision(blockData, xDir, yDir)
    {
        let checkDirX = xDir; 
        let checkDirY = yDir;

        for(let yI = 0; yI < blockData.length; yI++)
        {
            for(let xI = 0; xI < blockData[yI].length; xI++)
            {
                if(blockData[yI][xI] <= 0) {continue};
                let checkY = yI + this.y + checkDirY;
                let checkX = xI + this.x + checkDirX; 
                
                if(
                    (checkY >= 0 && checkY < this.gameGrid.length)
                &&  (checkX >= 0 && checkX < this.gameGrid[0].length)
                )
                {
                    if(this.gameGrid[checkY][checkX] > 0)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    //boolean
    canMoveDown()
    {
        if(this.isMoveOutOfBounds(this.blockData, 0,1)) { return false;  }
        if(this.isBlockCollision(this.blockData, 0,1) ) { return false; }
        return true;
    }

    //void
    moveDown()
    {
        this.y++;
    }

    //boolean
    canMoveLeft()
    {
        if(this.isMoveOutOfBounds(this.blockData, -1,0)) { return false;  }
        if(this.isBlockCollision(this.blockData, -1,0) ) { return false; }
        return true;
    }

    //void
    moveLeft()
    {
        this.x--;
    }

    //boolean
    canMoveRight()
    {
        if(this.isMoveOutOfBounds(this.blockData, 1,0)) { return false;  }
        if(this.isBlockCollision(this.blockData, 1,0) ) { return false; }
        return true;
    }

    //void
    moveRight()
    {
        this.x++;
    }

    //boolean
    canRotateLeft()
    {
        const checkRotateLeft = rotateLeft(this.blockData);
        if(this.isMoveOutOfBounds(checkRotateLeft , 0,0)) { return false;  }
        if(this.isBlockCollision(checkRotateLeft , 0,0) ) { return false; }
        return true;
    }

    //void
    rotateLeft()
    {
        this.blockData = rotateLeft(this.blockData);
    }

    //boolean
    canRotateRight()
    {
        const checkRotateRight = rotateRight(this.blockData);
        if(this.isMoveOutOfBounds(checkRotateRight , 0,0)) { return false;  }
        if(this.isBlockCollision(checkRotateRight , 0,0) ) { return false; }
        return true;
    }

    //void
    rotateRight()
    {
        this.blockData = rotateRight(this.blockData);
    }



}