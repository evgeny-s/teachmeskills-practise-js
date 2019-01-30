describe('Exercise 04', () => {
  describe('the default super class is `Object`', () => {
    it('a `class A` is an instance of `Object`', () => {
      let A;


      //Do not touch this line!!!
      chai.expect(new A() instanceof Object).to.equal(true);
    });



    it('when B extends A, B is also instance of `Object`', () => {
      class A {}

      class B extends A {}


      //Do not touch this line!!!
      chai.expect(new B() instanceof A).to.equal(true);
      chai.expect(new B() instanceof Object).to.equal(true);
    });



    it('a class can extend `null`, and is not an instance of Object', () => {
      class NullClass extends Object {}

      let nullInstance = new NullClass();


      //Do not touch this line!!!
      chai.expect(nullInstance instanceof Object).to.equal(false);
    });
  });



  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      let A;

      class B extends A {}


      //Do not touch this line!!!
      chai.expect(new B() instanceof A).to.equal(true);
    });



    it('extend over multiple levels', () => {
      class A {}

      class C extends B {}


      //Do not touch this line!!!
      chai.expect(new C instanceof A).to.equal(true);
    });
  });
});