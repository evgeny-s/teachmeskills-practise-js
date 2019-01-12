describe('Exercise 02', () => {
  it('should return correct array 1', () => {
    chai.expect(removeIfCondition([1, 2, 3, 4], n => n >= 3)).to.eql([1, 2]);
  });

  it('should return correct array 2', () => {
    chai.expect(removeIfCondition([1, 5, 10], n => true)).to.eql([]);
  });

  it('should return correct array 3', () => {
    chai.expect(removeIfCondition(['array', 'of', 'strings'], (string) => string.length > 2)).to.eql(['of']);
  });
});