// // async concept

console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
console.log(4);

// /**
//  * output
//  * 
//  * 1 sync 
//  * 4 sync
//  * 3 async
//  * 2 async after 1 second
//  */