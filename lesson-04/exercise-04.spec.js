describe('Rewrite to async/await', function() {
  it('should be rewritten correctly', async function() {
    try {
      await loadJson('no-such-user.json')
    } catch(e) {
      chai.expect(e.message).to.equal('404');
    }
  });
});
