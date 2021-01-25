// business logic for travel log

function TravelLog() {
  this.destinations = {}
  this.currentId = 0;
}
TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}
TravelLog.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
}

// business logic for locations

function Destination(location, landmarks, cost, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.cost = cost;
  this.notes = notes;
}

Destination.prototype.location = function() {
  return this.location;
}