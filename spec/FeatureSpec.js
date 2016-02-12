describe('Feature Test: ', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature with up button', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

});
