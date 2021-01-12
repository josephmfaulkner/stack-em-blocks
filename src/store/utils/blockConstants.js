const SHAPE_T = 
[
    [0,1,0],
    [1,1,1]
];

const SHAPE_S = 
[
    [0,2,2],
    [2,2,0]
];

const SHAPE_S2 = 
[
    [3,3,0],
    [0,3,3]
];

const SHAPE_L = 
[
    [4,0],
    [4,0],
    [4,4]
];

const SHAPE_L2 = 
[
    [0,5],
    [0,5],
    [5,5]
];

const SHAPE_I = 
[
    [6],
    [6],
    [6],
    [6]
];

const SHAPE_B = 
[
    [7,7],
    [7,7]
];

const RAND_BLOCK_MAP = {
    0: SHAPE_T,
    1: SHAPE_S,
    2: SHAPE_S2,
    3: SHAPE_L,
    4: SHAPE_L2,
    5: SHAPE_I,
    6: SHAPE_B
}

const getRandomBlock = function(){
    let randomIndex = Math.floor(Math.random() * Math.floor(7));
    return RAND_BLOCK_MAP[randomIndex];
}

export {
    SHAPE_T,
    SHAPE_S,
    SHAPE_S2,
    SHAPE_L,
    SHAPE_L2,
    SHAPE_I,
    SHAPE_B,
    RAND_BLOCK_MAP,
    getRandomBlock
}







