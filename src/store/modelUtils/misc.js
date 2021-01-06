
const newBlank2dArray = function(x, y)
{
    let newArray = new Array(y);
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = new Array(x);
        let row = newArray[i];
        for(let j = 0; j < row.length; j++)
        {
            row[j] = 0;
        }
    }
    return newArray;
}

const copy2dArray = function(array)
{
    if (array.length <= 0) { return [[]];}

    const yLen = array.length; 
    const xLen = array[0].length;

    let newArray = new Array(yLen);
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = new Array(xLen);
        let row = newArray[i];
        for(let j = 0; j < row.length; j++)
        {
            row[j] = array[i][j];
        }
    }
    return newArray;
}

export { newBlank2dArray, copy2dArray };