const button = document.querySelector("#button");
const newItem = document.querySelector(".new");
const newItems = document.querySelector(".red");

// button.addEventListener("click", function () {
//   newItem.style.color = "red";
// });
button.addEventListener("click", function () {
  newItem.classList.toggle("red");
});
// const listItems = document.querySelector("#top");

// const dam = [
//   "hello vaishnavi",
//   "hello akansha",
//   "hello anushka",
//   "hello geetika",
// ];
// console.log(dam);
// button.addEventListener("click", function () {
//   for (i = 0; i < 4; i++) {
//     const newItem = document.createElement("li");
//     newItem.classList.add("items");
//     newItem.innerText = dam[i];
//     listItems.append(newItem);
//     console.log("dam[i]");
//   }
//   const newItem = document.createElement("li");
//   newItem.classList.add("items");
//   newItem.innerText = "";
//   listItems.append(newItem);
// });
// diffrent one
// const button = document.querySelector("#button");
// const item = document.querySelector(".items");
// const input = document.querySelector(".form-input");
// const tops = document.querySelector("#top-list");
// const num = tops.children;
// // console.log(tops.children);
// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("items");
//   newItem.innerText = `Item ${num.length + 1}`;
//   tops.append(newItem);
//   newItem.addEventListener("click", deleteItem);
// });
// function deleteItem(e) {
//   e.stopPropagation();
//   e.target.remove();
// }
// tops.addEventListener("click", function () {
//   tops.classList.toggle("fade");
// });
