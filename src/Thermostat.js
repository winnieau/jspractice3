function Thermostat(){
  this.temperature = 20;
  this.min = 10;
  this.powerSave = true;
  this.colour = 'yellow';
}

Thermostat.prototype.up = function () {
  if (this.powerSave === true) {
    if (this.temperature < 25) {
      this.temperature += 1;
    }
  } else if (this.powerSave === false) {
    if (this.temperature < 32) {
      this.temperature += 1;
    }
  } else {
    this.temperature += 1;
  }
  this.display();
};

Thermostat.prototype.down = function () {
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
  this.display();
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
  this.display();
};

Thermostat.prototype.display = function(){
  if(this.temperature < 18) {
    this.colour = 'green';
  } else if (this.temperature < 25) {
    this.colour = 'yellow';
  } else {
    this.colour = 'red';
  }
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSave = true;
};

Thermostat.prototype.powerSaveOff = function () {
  this.powerSave = false;
};
