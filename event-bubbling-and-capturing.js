const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", function (e) {
  console.log("Grandparent called!");
  // e.stopPropagation();
});

parent.addEventListener("click", function (e) {
  console.log("Parent called!");
  // e.stopPropagation();
});

child.addEventListener("click", function (e) {
  console.log("Child called!");
  // e.stopPropagation();
});
