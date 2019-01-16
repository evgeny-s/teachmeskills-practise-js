describe('Exercise 01', () => {
  it('Class Car should exists', () => {
    chai.expect(typeof Car).to.eql("function");
  });

  it('Class Car should exists', () => {
    chai.expect(typeof BMW).to.eql("function");
  });

  it('Method drive should exists and return `I drive`', () => {
    let bmw = new BMW();
    chai.expect(bmw.drive()).to.eql("I drive");
  });

  it('Method refuel should exists and return `I refuel`', () => {
    let bmw = new BMW();
    chai.expect(bmw.refuel()).to.eql("I refuel");
  });

  it('Method goFast should exists and return `I go fast`', () => {
    let bmw = new BMW();
    chai.expect(bmw.goFast()).to.eql("I go fast");
  });
});