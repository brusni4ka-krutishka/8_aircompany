const Plane = require('./Plane');

class CustomPlane extends Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
  }
}

// TODO: Implement additional functionality if needed
