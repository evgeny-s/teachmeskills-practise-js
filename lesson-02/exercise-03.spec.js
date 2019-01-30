describe('Exercise 03', () => {
  describe('for methods', () => {
    class UnitTest {}
    it('a static method just has the prefix `static`', () => {
      class TestFactory {
        makeTest() { return new UnitTest(); }
      }


      //Do not touch this line!!!
      chai.expect(TestFactory.makeTest() instanceof UnitTest).to.equal(true);
    });



    it('the method name can be dynamic/computed at runtime', () => {
      const methodName = 'makeTest';
      class TestFactory {
        static [methodName]() { return new UnitTest(); }
      }


      //Do not touch this line!!!
      chai.expect(TestFactory.createTest() instanceof UnitTest).to.equal(true);
    });
  });



  describe('for accessors', () => {
    it('a getter name can be static, just prefix it with `static`', () => {
      class UnitTest {
        get testType() { return 'unit'; }
      }


      //Do not touch this line!!!
      chai.expect(UnitTest.testType).to.equal('unit');
    });



    it('even a static getter name can be dynamic/computed at runtime', () => {
      const type = 'test' + 'Type';
      class IntegrationTest {
        get type() { return 'integration'; }
      }


      //Do not touch this line!!!
      chai.expect('testType' in IntegrationTest).to.equal(true);
      chai.expect(IntegrationTest.testType).to.equal('integration');
    });
  });
});