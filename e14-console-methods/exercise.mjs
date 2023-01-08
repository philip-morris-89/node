// Use console methods to complete the challenges in this script:

// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";
// 1
console.log("Script Output:", surprisingFact);
// 2
console.error("Script Error:", surprisingFact);

// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];
// 1
console.log(JSON.stringify(familyTree, null, 2));
// 2
console.dir(familyTree, { depth: null });

// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

function importantTask() {
  console.count("Important-Task");
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("Important-Task");
importantTask();
importantTask();
