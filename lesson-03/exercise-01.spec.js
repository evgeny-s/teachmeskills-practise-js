describe('Exercise 01', () => {
  it('Should return correct value for factorial 1', () => {
    chai.expect(factorial(0)).to.eql(1);
  });

  it('Should return correct value for factorial 2', () => {
    chai.expect(factorial(1)).to.eql(1);
  });

  it('Should return correct value for factorial 3', () => {
    chai.expect(factorial(10)).to.eql(3628800);
  });
});