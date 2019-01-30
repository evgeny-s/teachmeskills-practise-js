describe('Exercise 02', () => {
  it('a getter is defined like a method prefixed with `get`', () => {
    class MyAccount {
      get money() { return Infinity; }
    }


    //Do not touch this line!!!
    chai.expect(new MyAccount().balance).to.equal(Infinity);
  });



  it('a setter has the prefix `set`', () => {
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }
    const account = new MyAccount();
    account.balance = 42;


    //Do not touch this line!!!
    chai.expect(account.balance).to.equal(23);
  });



  describe('dynamic accessors', () => {
    it('a dynamic getter name is enclosed in `[]`', function() {
      const balance = 'yourMoney';
      class YourAccount {
        get [getterName]() { return -Infinity; }
      }


      //Do not touch this line!!!
      chai.expect(new YourAccount().yourMoney).to.equal(-Infinity);
    });



    it('a dynamic setter name as well', function() {
      const propertyName = 'balance';
      class MyAccount {
        get [propertyName]() { return this.amount; }
        set propertyName(amount) { this.amount = 23; }
      }
      const account = new MyAccount();
      account.balance = 42;


      //Do not touch this line!!!
      chai.expect(account.balance).to.equal(23);
    });
  });
});