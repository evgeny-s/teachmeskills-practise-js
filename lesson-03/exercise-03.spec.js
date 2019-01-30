describe('Exercise 03', () => {
  it('Should return correct email 1', () => {
    chai.expect(extractEmail('<a href="mailto:user@gmail.com">Write a letter</a>')).to.eql('user@gmail.com');
  });

  it('Should return correct email 2', () => {
    chai.expect(extractEmail('<a href="mailto:hello@tut.by">Write a letter</a>')).to.eql('hello@tut.by');
  });

  it('Should return correct email 3', () => {
    chai.expect(extractEmail('<a href="mailto:asdfsf.asdfasfd">Write a letter</a>')).to.eql(null);
  });
});