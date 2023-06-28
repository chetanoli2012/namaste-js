const category = document.getElementById("category");

category.addEventListener("click", function (e) {
  if (e.target && e.target.tagName === "LI")
    window.location.href = `/${e.target.id}`;
});
