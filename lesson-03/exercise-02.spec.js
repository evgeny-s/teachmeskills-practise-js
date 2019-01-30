describe('Exercise 02', () => {
  it('Should return correct value for the sum of integers 1', () => {
    chai.expect(sumIntegers([1, 2, 3, 4, 5])).to.eql(15);
  });

  it('Should return correct value for the sum of integers 2', () => {
    chai.expect(sumIntegers([1])).to.eql(1);
  });

  it('Should return correct value for the sum of integers 3', () => {
    chai.expect(sumIntegers([5, 3, 1, 2, 4, 6])).to.eql(21);
  });

  it('Should return correct value the empty array', () => {
    chai.expect(sumIntegers([])).to.eql(0);
  });
});