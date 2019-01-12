describe('Exercise 01', () => {
  it('should return correct array of strings 1', () => {
    chai.expect(stringToArray('I love javaScript!!')).to.eql(["I","love","javaScript"]);
  });

  it('should return correct array of strings 2', () => {
    chai.expect(stringToArray('python, java, php')).to.eql(["python","java","php"]);
  });

  it('should return correct array of strings 3', () => {
    chai.expect(stringToArray('Hello, we studying Javascript')).to.eql(["Hello","we","studying", "Javascript"]);
  });

  it('should return empty array in empty string', () => {
    chai.expect(stringToArray('')).to.eql([]);
  });
});