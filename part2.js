var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + "has been addet to array. ");
    var count = myTaskArray.length;
    return count;
}
function listAllTasks() {
    console.log("List all Items in the Array");
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index);
        console.log("Element " + task + " remove from array");
    }
    else {
        console.log("Element " + task + " not in array");
    }
    var myTaskArrayLength = myTaskArray.length;
    return myTaskArrayLength;
}
addTask("number three");
addTask("number two");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
var x = deleteTask("number two");
