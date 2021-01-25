// business logic for travel log



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