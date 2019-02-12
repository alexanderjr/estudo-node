var assert = require('assert');

Person = class {
  constructor(name){
    this.name = "Alex";
  }
  getName(){
    return this.name;
  }
}

describe('Avaliação', function() {
  it('deve retornar o somatório dos valores', function() {
    const person = new Person();
    assert.equal(person.getName(), "Alex");
  });
});