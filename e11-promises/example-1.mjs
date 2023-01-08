const someTask = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("This is some data"), 2000);
});

console.log(someTask);

someTask.then(
  function (value) {
    console.log("Value:", value);
    console.log("someTask:", someTask);
  },
  function (reason) {
    console.log("Reason:", reason);
    console.log("someTask:", someTask);
  }
);
