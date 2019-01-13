describe('Exercise 04', () => {
  it('should return correct percentage 1', () => {
    chai.expect(calcNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).to.eql(60);
  });

  it('should return correct percentage 2', () => {
    chai.expect(calcNumbers([10, 15, 20], 5)).to.eql(0);
  });

  it('should return correct percentage 3', () => {
    chai.expect(calcNumbers([1, 2, 3], 10)).to.eql(100);
  });
});