const utils = require('./utils')

it('should add 2 numbers', () => {
    var res = utils.add(9,1);

    if(res !== 10){
        throw new Error(`Expected 10 got ${res}`);
    }
});

it('should square a number', () => {
    var res = utils.square(9);

    if(res !== 81){
        throw new Error(`Expected 81 got ${res}`);
    }
});
