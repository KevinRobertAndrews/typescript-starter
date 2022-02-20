import { average } from '../src/index';

describe('average should calculate the average properly', () => {
    test('three positive numbers', () => {
        expect(average(3, 4, 5)).toBe(4);
    })
})