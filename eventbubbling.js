const button = document.querySelector("#button");
const item = document.querySelector(".items");
const input = document.querySelector(".form-input");
const tops = document.querySelector("#top-list");
const num = tops.children;
// console.log(tops.children);
button.addEventListener("click", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.classList.add("items");
  newItem.innerText = input.value;
  tops.append(newItem);
  input.value = "";
  newItem.addEventListener("click", deleteItem);
});
function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}
tops.addEventListener("click", function () {
  tops.classList.toggle("fade");
});
