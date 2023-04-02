const { calculateOrder } = require('./atms');
const data1 = require('../example/example_1_request.json')
const expected1 = require('../example/example_1_response.json')
const data2 = require('../example/example_2_request.json')
const expected2 = require('../example/example_2_response.json')

describe('calculateOrder', () => {

  it('should return correct data 1', () => {
    const result = calculateOrder(data1);
    expect(result).toEqual(expected1);
  });

  it('should return correct data 2', () => {
    const result = calculateOrder(data2);
    expect(result).toEqual(expected2);
  });

});