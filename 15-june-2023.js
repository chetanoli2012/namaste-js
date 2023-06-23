const people = [
  { id: 1, name: "John" },
  { id: 2, name: "Paul" },
];

const newPeople = [
  { id: 1, name: "George" },
  { id: 3, name: "Ringo" },
];

// Write a function to find the difference between two arrays
const getDelta = (people, newPeople) => {
  let delta = {
    added: [], // {id: 3, name: Ringo}
    deleted: [], // {id: 2, name: Paul}
    changed: [], // {id: 1, name: John}
  };
  // TODO: Write function to find delta between people & newPeople

  newPeople.forEach((newppl) => {
    const existingPeople = people.find((ppl) => ppl.id === newppl.id);
    if (existingPeople) {
      if (newppl.name !== existingPeople.name) {
        delta.changed.push(existingPeople);
      }
    } else {
      delta.added.push(newppl);
    }
  });

  people.forEach((ppl) => {
    const existingPpl = newPeople.find((newPpl) => newPpl.id === ppl.id);
    if (!existingPpl) {
      delta.deleted.push(ppl);
    }
  });

  return delta;
};

const getDeltaOptimized = (people, newPeople) => {
  let delta = {
    added: [], // {id: 3, name: Ringo}
    deleted: [], // {id: 2, name: Paul}
    changed: [], // {id: 1, name: John}
  };
  // TODO: Write function to find delta between people & newPeople
  const peopleMap = new Map();

  for (const person of people) {
    peopleMap.set(person.id, person);
  }

  for (const newPerson of newPeople) {
    if (peopleMap.has(newPerson.id)) {
      const existingPerson = peopleMap.get(newPerson.id);
      if (existingPerson.name !== newPerson.name) {
        delta.changed.push(newPerson);
      }
      peopleMap.delete(newPerson.id); // Remove from map to identify deleted objects later
    } else {
      delta.added.push(newPerson);
    }
  }

  for (const [id, person] of peopleMap) {
    delta.deleted.push(person);
  }

  return delta;
};

console.log(getDelta(people, newPeople));
console.log(getDeltaOptimized(people, newPeople));
