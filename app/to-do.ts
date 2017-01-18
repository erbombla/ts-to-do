class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Buy groceries.', 'Medium'));
console.log(tasks);
