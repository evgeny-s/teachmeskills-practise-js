describe('Exercise 05', () => {
  it('Should work the same as Array.filter method 1', () => {
    chai.expect([1, 2, 3, 4, 5].customFilter((item) => item > 3)).to.eql([4, 5]);
  });

  it('Should work the same as Array.filter method 2', () => {
    chai.expect(['Hello', 'world', 'I', 'love', 'you', 'Javascript'].customFilter((item) => item.length <= 4)).to.eql(['I', 'love', 'you']);
  });

  it('Should work the same as Array.filter method 3', () => {
    chai.expect([true, false, true, false].customFilter((item) => item === true)).to.eql([true, true]);
  });
});