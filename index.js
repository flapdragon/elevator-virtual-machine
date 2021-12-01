// Elevator factory
// Version 1. Is one elevator in one building.
function createElevator(name, building) {
  return {
    name: name,
    building: { ... building }, // { name: "ABC", floors: 1 }
    currentFloor: 1, // By default the elevator always starts on 1.
    queue: []
  }
}

const ellie = createElevator('Ellie', { name: "Tenacity Tower", floors: 20 });

console.log(ellie);

// Inputs: a queue of inputs from the various use buttons

// Input: from button push on each floor
// Input: button push from within the elevator
