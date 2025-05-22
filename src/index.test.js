const {add} = require ('./index');

test('adds 1 + 2 to equals 3',() =>{
    expect(add(1,2)).toBe(3);
})