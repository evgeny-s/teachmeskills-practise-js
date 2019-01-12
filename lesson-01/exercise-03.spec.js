describe('Exercise 03', () => {
  it('should sort string correctly 1', () => {
    chai.expect(sortAlph("cabbage")).to.eql("aabbceg");
  });
  it('should sort string correctly 2', () => {
    chai.expect(sortAlph("a7fs23l1n4o6x")).to.eql("123467aflnosx");
  });
  it('should sort string correctly 3', () => {
    chai.expect(sortAlph("qdrxhswvptguaofnemijckzybl")).to.eql("abcdefghijklmnopqrstuvwxyz");
  });
});