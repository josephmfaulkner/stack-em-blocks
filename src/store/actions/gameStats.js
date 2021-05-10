const INCREMENT_BLOCK_COUNT = 'INCREMENT_BLOCK_COUNT';

function incrementBlockCount(blockNumber)
{
    return {
        type: INCREMENT_BLOCK_COUNT,
        payload: blockNumber
    }
}

export { 
    INCREMENT_BLOCK_COUNT, incrementBlockCount
}