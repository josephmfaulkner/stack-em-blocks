import { clearFilledRows } from "../store/modelUtils/gameGrid";

it('clearFilledRows (all)', () => {
    const testInputGrid = [
        [1,1,1],
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ];
    const testOutputGrid = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    const testOutputGridResult = clearFilledRows(testInputGrid);
    expect(testOutputGrid).toEqual(testOutputGridResult);

});

it('clearFilledRows', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,0,0],
        [1,0,5,0],
        [1,2,3,4]
    ];
    const testOutputGrid = [
        [1,2,1,0],
        [0,0,0,0],
        [1,0,5,0],
        [0,0,0,0]
    ];

    const testOutputGridResult = clearFilledRows(testInputGrid);
    expect(testOutputGrid).toEqual(testOutputGridResult);

});


it('clearFilledRows3 (nothing to clear)', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,0]
    ];
    const testOutputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,0]
    ];

    const testOutputGridResult = clearFilledRows(testInputGrid);
    expect(testOutputGrid).toEqual(testOutputGridResult);

});