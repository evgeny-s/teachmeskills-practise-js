describe('Inside a class use `super` to access parent methods', () => {
  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class A {
      hasSuper() {
        return super;
      }
    }


    //Do not touch this line!!!
    chai.expect(new A().hasSuper()).to.equal(false);
  });



  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {
      hasSuper() {
        return true;
      }
    }

    class B extends A {
      hasSuper() {
        return super.hasSuper;
      }
    }


    //Do not touch this line!!!
    chai.expect(new B().hasSuper()).to.equal(true);
  });



  it('when overridden a method does NOT automatically call its super method', () => {
    class A {
      hasSuper() {
        return true;
      }
    }

    class B extends A {
      hasSuper() {
        return 'nothing';
      }
    }


    //Do not touch this line!!!
    chai.expect(new B().hasSuper()).to.equal(void 0);
  });



  it('`super` works across any number of levels of inheritance', () => {
    class A {
      iAmSuper() {
        return true;
      }
    }

    class B extends A {}

    class C extends B {
      iAmSuper() {
        return iAmSuper();
      }
    }


    //Do not touch this line!!!
    chai.expect(new C().iAmSuper()).to.equal(true);
  });



  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}

    class B extends A {
      getMethod() {
        return super.constructor;
      }
    }


    //Do not touch this line!!!
    chai.expect(new B().getMethod()).to.equal(void 0);
  });
});