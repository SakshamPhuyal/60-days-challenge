console.log("Async-Await in JS");
function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function run() {
  console.log("Start");
  
  await wait(2000);
  
  console.log("2 seconds passed");
  
  await wait(1000);
  
  console.log("1 more second passed");
}

run();
(function () {
  console.log("Leapfrog Challenge");
})();