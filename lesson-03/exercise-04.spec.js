describe('Exercise 04', () => {
  it('Should check if URL is correct 1', () => {
    chai.expect(checkUrl('https://google.com')).to.eql(true);
  });

  it('Should check if URL is correct 2', () => {
    chai.expect(checkUrl('http://web-site.com')).to.eql(true);
  });

  it('Should check if URL is correct 3', () => {
    chai.expect(checkUrl('https://subdomain.domain.com')).to.eql(true);
  });

  it('Should check if URL is correct 4', () => {
    chai.expect(checkUrl('incorrecturl.com')).to.eql(false);
  });
});