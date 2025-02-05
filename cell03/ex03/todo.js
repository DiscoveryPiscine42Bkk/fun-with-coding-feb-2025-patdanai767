const textList = document.getElementById("todolist");
const list = document.getElementById("ft_list");

function addList() {
  var li = document.createElement("p");
  li.innerHTML = textList.value;
  list.appendChild(li);
  var x = document.createElement("span");
  x.innerHTML = "\u00d7";
  li.appendChild(x);
  document.cookie = `data=${list}`;
  textList.value = null;
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    const checked = confirm(`Are you sure to delete?`);
    if (checked) {
      e.target.parentElement.remove();
      document.cookie = "";
    }
  }
});

function showTask() {
  list.innerHTML = document.cookie;
}
showTask();
