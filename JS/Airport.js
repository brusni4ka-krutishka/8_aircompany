const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {
  constructor(planes = []) {
    this.planes = planes;
  }

  getPasPl() {
    return this.planes.filter((plane) => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => plane instanceof MilitaryPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    return this.getPasPl().reduce(
      (maxCapacityPlane, plane) =>
        plane.getPassengersCapacity() > maxCapacityPlane.getPassengersCapacity()
          ? plane
          : maxCapacityPlane,
      this.getPasPl()[0]
    );
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT
    );
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.TYPE_BOMBER
    );
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
  }

  sortByMaxDistance() {
    this.planes.sort(
      (a, b) => a.getMaxFlightDistance() - b.getMaxFlightDistance()
    );

    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => a.getMS() - b.getMS());
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => a.getMinLoadCapacity() - b.getMinLoadCapacity());
    return this;
  }

  getPlanes() {
    return this.planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
