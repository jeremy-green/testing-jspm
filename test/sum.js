import {assert, expect} from 'chai';
import System from 'jspm';
import '../config.js';

describe('sum', () => {
  let sum;

  before(done => {
    System.import('sum').then(module => {
      sum = module.default;
      done();
    });
  });

  it('should add numbers', () => {
    const result = sum([1, 2]);
    expect(result).to.equal(3);
  });

  it('should add negative numbers', () => {
    const result = sum([1, -1]);
    expect(result).to.equal(0);
  });
});
