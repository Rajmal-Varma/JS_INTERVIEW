
//what is javascript -
// JavaScript is a programming language that adds interactivity to your website.
// This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms;
// with dynamic styling; with animation, etc. This article helps you get started with this exciting language

//Asynchronous callbacks - are executed outside the main program flow, 
// meaning that the program execution does not wait for the callback to be executed before
// continuing. Asynchronous callbacks are often used to continue code execution after an
// operation has finished. For example, when reading a file with the File System
// module, the code will continue to run while the file is being read.

//task queue - is a queue of tasks waiting to be executed. Each task is associated with a function.
// When we call a function that performs a task asynchronously, the function is added to the task queue.
// The event loop takes the first task from the queue, executes the associated function, and
//  removes the task from the task queue. When the task is finished, the event loop takes the next
//  task from the queue and so on. When the task queue is empty, the event loop keeps on running
//  and listening for new tasks to arrive in the task queue. The event loop will only end when
//  there are no more callbacks to perform.


//Event loop -  is a mechanism that allows Node.js to perform non-blocking I/O operations.
// This means that Node.js can handle more than one request at a time.
// Node.js uses libuv to implement this asynchronous (that is, non-blocking) behavior.
// The event loop is the core of every Node.js application. All the asynchronous I/O 
//  operations run inside the event loop. The event loop basically handles all the
// asynchronous callbacks in an application. It is a single thread that listens to
//  all the events in the application and then triggers the callback functions.
//  The event loop is the secret behind Node.js’s ability to handle multiple
//  concurrent connections efficiently. The event loop is a single thread that
//  listens to all the events in the application and then triggers the callback functions.

// event loop  -  
// Path: EventLoop.js
 function sum(a, b) {
    return a + b;
 } 
   console.log(sum(1, 2));

   setTimeout(()=>{
         console.log('Hello');
   }, 1000)

    function calculate() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    return sum;
 }
   console.log(calculate());
