describe('Thermostat', function(){

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

  it('can decrease temperature with down button', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 1; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('max temp is 25 degrees with powersave mode on', function() {
    thermostat.powerSave = true;
    for (var i = 1; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

});
