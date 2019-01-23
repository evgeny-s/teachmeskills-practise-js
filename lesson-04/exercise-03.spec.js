describe('Triangle exercise', function() {
  it('should have correct constructor', function() {
    let t = new Triangle(1, 2, 3);

    chai.expect(t.constructor).to.equal(Triangle);
  });

  it('should have correct prototype', function() {
    let t = new Triangle(1, 2, 3);

    chai.expect(shape.isPrototypeOf(t)).to.equal(true);
  });

  it('should have correct perimeter', function() {
    let t = new Triangle(1, 2, 3);

    chai.expect(t.getPerimeter()).to.equal(6);
  });

  it('should have correct type', function() {
    let t = new Triangle(1, 2, 3);

    chai.expect(t.getType()).to.equal("triangle");
  });
});
