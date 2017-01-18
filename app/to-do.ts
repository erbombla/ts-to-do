class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){
  }
  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Buy groceries.', 'Medium'));
tasks.push(new Task('Do laundry.', 'Low'));
tasks.push(new Task('Pay credit card.', 'High'));

tasks[0].markDone();

for(var task of tasks){
  console.log(task);
}
