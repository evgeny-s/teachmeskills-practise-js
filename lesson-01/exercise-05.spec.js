describe('Exercise 05', () => {
  it('should return 1', () => {
    chai.expect(isSorted([0, 1, 2, 2])).to.eql(1);
  });

  it('should return -1', () => {
    chai.expect(isSorted([4, 3, 2])).to.eql(-1);
  });

  it('should return 0', () => {
    chai.expect(isSorted([4, 3, 5])).to.eql(0);
  });
});