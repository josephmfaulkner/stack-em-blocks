import { clearFilledRows, shiftClearedRowsDown } from "../store/modelUtils/gameGrid";

it('shiftClearedRowsDown', () => {
    const testInputGrid = [
        [1,1,0],
        [1,1,0],
        [0,0,0],
        [0,0,0]
    ];
    const testOutputGrid = [
        [0,0,0],
        [0,0,0],
        [1,1,0],
        [1,1,0]
    ];

    const testOutputGridResult = shiftClearedRowsDown(testInputGrid);
    expect(testOutputGrid).toEqual(testOutputGridResult);

});

it('shiftClearedRowsDown2', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,0,0],
        [1,0,5,0],
        [0,0,0,0]
    ];
    const testOutputGrid = [
        [0,0,0,0],
        [0,0,0,0],
        [1,2,1,0],
        [1,0,5,0]
    ];

    const testOutputGridResult = shiftClearedRowsDown(testInputGrid);
    expect(testOutputGrid).toEqual(testOutputGridResult);

});


it('shiftClearedRowsDown3 (nothing to clear)', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,4]
    ];
    const testOutputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,4]
    ];

    const testOutputGridResult = shiftClearedRowsDown(testInputGrid);
    expect(testOutputGrid).toEqual(testOutputGridResult);

});