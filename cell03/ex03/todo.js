const textList = document.getElementById("todolist");
const list = document.getElementById("ft_list");

function addList() {
  if (textList.value !== "") {
    var li = document.createElement("p");
    li.innerHTML = textList.value;
    list.appendChild(li);
    var x = document.createElement("span");
    x.innerHTML = "\u00d7";
    li.appendChild(x);
    console.log(list);
    document.cookie = `data=${list.outerHTML}`;
    textList.value = null;
  }
}

function getCookies(name) {
  let cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
      let [key, value] = cookie.split('=');
      if (key === name) return decodeURIComponent(value);
  }
  return "";
}

console.log(getCookies("data"))

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
