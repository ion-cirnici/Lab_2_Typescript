let myTaskArray:Array<string> = [];

function addTask(task:string):number{
    myTaskArray.push(task);
    console.log("Item " +task+"has been addet to array. ")
    let count:number = myTaskArray.length;
    return count;

}


function listAllTasks():void{
  

console.log("List all Items in the Array")
myTaskArray.forEach(function (task) {
    console.log(task);
})

}
function deleteTask(task:string): number {
let index:number = myTaskArray.indexOf(task);
if(index > -1){
myTaskArray.splice(index);
console.log("Element " + task +" remove from array")
} else {
console.log("Element " + task +" not in array")
}

let myTaskArrayLength = myTaskArray.length;
return myTaskArrayLength

}
addTask("number three");
addTask("number two");

let elementCount:number = addTask("Number One")
console.log(elementCount);
listAllTasks();
let x:number = deleteTask("number two");


