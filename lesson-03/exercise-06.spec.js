describe('Bind, Call, Apply', () => {
  it('Should return correct value for the Full Name', () => {
    let methods = {
      fullName: function () {return `${this.firstName} ${this.lastName}`}
    };

    let user = {
      firstName: 'Vasya',
      lastName: 'Pupkin',
    };

    const bindMethod = () => {};//FIXME


    //Do not touch this line!!!
    chai.expect(bindMethod()).to.equal('Vasya Pupkin');
  });

  it('Arrow function has no `this` context', () => {
    let actions = {
      saySomething: () => `${this.firstPart} ${this.secondPart}`
    };

    let parts = {
      firstPart: 'Hello',
      secondPart: 'World',
    };

    const bindMethod = actions.saySomething.bind(parts);


    //Do not touch this line!!!
    chai.expect(bindMethod()).to.equal('Hello World');
  });
});