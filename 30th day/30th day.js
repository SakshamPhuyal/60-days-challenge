console.log("Promise and Promise chaining in JS");
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 2000);
  });
};

fetchData()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
console.log("Promise Chaining in JS");
function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve("Data from Step 1");
    }, 1000);
  });
}

function stepTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed with:", data);
      resolve("Data from Step 2");
    }, 1000);
  });
}
function stepThree(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed with:", data);
      resolve("All steps done!");
    }, 1000);
  });
}
stepOne()
  .then((res1) => stepTwo(res1))
  .then((res2) => stepThree(res2))
  .then((finalRes) => console.log(finalRes))
  .catch((err) => console.log("Error:", err));