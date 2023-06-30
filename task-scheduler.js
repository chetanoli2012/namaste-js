// task scheduling

const schedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["f"] },
  { id: "f", dependencies: [] },
];

const totalTasks = schedules.length;
let executedTasks = 0,
  currentTask = 0;

const removeTaskIdFromDependencies = function (executedId) {
  schedules.forEach(function (ele) {
    const indexOfExecutedId = ele.dependencies.indexOf(executedId);

    if (indexOfExecutedId !== -1) {
      ele.dependencies.splice(indexOfExecutedId, 1);
    }
  });
};

const executeTasks = function (schedules) {
  while (executedTasks < totalTasks) {
    const task = schedules[currentTask];

    // we are maintaing executed flag to skip the execution if already executed

    if (!task.dependencies.length && !task.executed) {
      console.log(`Executing ${task.id}`);
      task.executed = true;
      removeTaskIdFromDependencies(task.id);
      executedTasks++;
    }

    // to check for cyclic dependencies we need to maintain visited flag

    if (!task.visited) {
      task.visited = 1;
    } else if (task.visited > totalTasks) {
      console.log("Cycle detected");
      break;
    } else {
      task.visited++;
    }
    if (currentTask === totalTasks - 1) {
      currentTask = 0;
    } else {
      currentTask++;
    }
  }
};

executeTasks(schedules);
