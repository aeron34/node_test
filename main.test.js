const main = require('./main.js')
let funct = main.funct;

it('algo test', () => {
  expect(funct(1)).toBe(6)
  expect(funct(0)).toBe(0)
  expect(funct(17)).toBe(86)
  expect(funct(36)).toBe(181)
  expect(funct(15)).toBe(76)
  expect(funct(99)).toBe(496)
  expect(funct(3)).toBe(16)
  expect(funct(87)).toBe(436)
})
