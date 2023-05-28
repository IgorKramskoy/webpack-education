import {validationLength} from "./validation";

test('Validation length +', () => {
    expect(validationLength('ggfgd')).toBe(true)
})

test('Validation length -', () => {
    expect(validationLength('')).toBe(false)
})