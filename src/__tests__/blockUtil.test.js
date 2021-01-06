import { rotateLeft, rotateRight } from "../store/modelUtils/blockActions";
import * as Block from "../store/modelUtils/block";

it('create new block', () => {
    let squareBlock = Block.SHAPE_B;
    expect(squareBlock).toEqual([[7,7],[7,7]]);
})

it('rotate quare block Left', () => {
    let squareBlock = Block.SHAPE_B;
    let squareBlockRotate = rotateLeft(squareBlock);
    expect(squareBlockRotate).not.toBe(squareBlock);
    expect(squareBlockRotate).toEqual([[7,7],[7,7]]);
})

it('rotate quare block Right', () => {
    let squareBlock = Block.SHAPE_B;
    let squareBlockRotate = rotateRight(squareBlock);
    expect(squareBlockRotate).not.toBe(squareBlock);
    expect(squareBlockRotate).toEqual([[7,7],[7,7]]);
})

it('rotate L block Right', () => {
    let lBlock = Block.SHAPE_L;
    let lBlockRotate = rotateRight(lBlock);
    expect(lBlockRotate).not.toBe(lBlock);
    expect(lBlockRotate).toEqual(
        [
            [4,4,4],
            [4,0,0]
        ]
        );
})

it('rotate L block Left', () => {
    let lBlock = Block.SHAPE_L;
    let lBlockRotate = rotateLeft(lBlock);
    expect(lBlockRotate).not.toBe(lBlock);
    expect(lBlockRotate).toEqual(
        [
            [0,0,4],
            [4,4,4]
        ]
        );
})

it('rotate L block Left 4 times', () => {
    let lBlock = Block.SHAPE_L;
    let lBlockRotate = rotateLeft(lBlock);
        lBlockRotate = rotateLeft(lBlockRotate);
        lBlockRotate = rotateLeft(lBlockRotate);
        lBlockRotate = rotateLeft(lBlockRotate);
    expect(lBlockRotate).not.toBe(lBlock);
    expect(lBlockRotate).toEqual(Block.SHAPE_L);
})

it('rotate L2 block Right 4 times', () => {
    let lBlock = Block.SHAPE_L2;
    let lBlockRotate = rotateRight(lBlock);
        lBlockRotate = rotateRight(lBlockRotate);
        lBlockRotate = rotateRight(lBlockRotate);
        lBlockRotate = rotateRight(lBlockRotate);
    expect(lBlockRotate).not.toBe(lBlock);
    expect(lBlockRotate).toEqual( Block.SHAPE_L2);

})

