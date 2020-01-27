import {taskInterface} from './interface';

class myTaskManager implements taskInterface{
myTaskArray: Array<string> = [];


addTask(task:string):number{
    myTaskArray.push(task);
    console.log("Item " +task+"has been addet to array. ")
    let count:number = myTaskArray.length;
    return count;
}

listAllTasks():void{
  

    console.log("List all Items in the Array")
    this.myTaskArray.forEach(function (task) {
        console.log(task);
    });
    
    }


deleteTask(task:string): number {
    let index:number = this.myTaskArray.indexOf(task);
    if(index > -1){
    this.myTaskArray.splice(index, 1);
    console.log("Element " + task +" remove from array")
    } else {
    console.log("Element " + task +" not in array")
    }
    
    let myArrayLength = this.myTaskArray.length;
    return myArrayLength;
    }
}



let myTaskManager1 = new myTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.listAllTasks();
