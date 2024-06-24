let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });

// let requestPromise = changeColor("red", 5000);
// console.log(requestPromise);

changeColor("red", 1000)
.then((result) => {
  console.log("red color was completed");
  console.log(result);
  return changeColor("orange", 1000);
})
.then((result) => {
  console.log("orange color was completed");
  console.log(result);
  return changeColor("green", 1000);
})
.then((result) => {
  console.log("green color was completed");
  console.log(result);
  return changeColor("blue", 1000);
})
.then((result) => {
  console.log("blue color was completed");
  console.log(result);
})
.catch((error) => {
  console.log("an error occured");
  console.log(error);
})