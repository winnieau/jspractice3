function Thermostat(){
  this.temperature = 20;
  this.min = 10;
  this.powerSave = true;
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
};

Thermostat.prototype.down = function () {
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};
