const utils = require('./utils')
const expect = require('expect');

it('should add 2 numbers', () => {
    var res = utils.add(9,1);
    expect(res).toBe(10).toBeA('number');

    // if(res !== 10){
    //     throw new Error(`Expected 10 got ${res}`);
    // }
});

it('should square a number', () => {
    var res = utils.square(9);

    expect(res).toBe(81).toBeA('number');

    // if(res !== 81){
    //     throw new Error(`Expected 81 got ${res}`);
    // }
});

it("should verify a user's first and last name", () => {
    var user = {
        location: 'St. Louis',
        age: 24
    }

    utils.setName(user, 'Austin Tanner');

    expect(user).toInclude({
        firstName: 'Austin',
        lastName: 'Tanner'
    }).toBeA('object');
});

// it('should be a thing', () => {
//     // expect(12).toNotBe(11);
//
//
// });

it("should async add 2 numbers", (done) => {
    utils.aSyncAdd(1, 1, (sum) => {
        expect(sum).toBe(2).toBeA('number');
        done();
    });
});

it("should square a number", (done) => {
    utils.aSyncSquare(2, (square) => {
        expect(square).toBe(4).toBeA('number');
        done();
    });
})
