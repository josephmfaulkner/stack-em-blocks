import { newBlank2dArray, copy2dArray } from "../store/modelUtils/misc";

it('new2dGridMain', () => {
    const new3x3 = newBlank2dArray(3,3);
    expect(new3x3.length).toEqual(3);
    expect(new3x3[0].length).toEqual(3);
})


it('new2dGridMain', () => {
    const new10x20 = newBlank2dArray(10,20);
    expect(new10x20.length).toEqual(20);
    expect(new10x20[0].length).toEqual(10);
})

it('copy2d Square', () => {
    const grid = [[1,2,3],[4,5,6],[7,8,9]];
    const gridCopy = copy2dArray(grid);
    expect(gridCopy).not.toBe(grid);
    expect(gridCopy).toEqual(grid);
})

it('copy2d Rect', () => {
    const grid = [[1,2,3],[4,5,6]];
    const gridCopy = copy2dArray(grid);
    expect(gridCopy).not.toBe(grid);
    expect(gridCopy).toEqual(grid);
})

it('copy2d Rect2', () => {
    const grid = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]];
    const gridCopy = copy2dArray(grid);
    expect(gridCopy).not.toBe(grid);
    expect(gridCopy).toEqual(grid);
})