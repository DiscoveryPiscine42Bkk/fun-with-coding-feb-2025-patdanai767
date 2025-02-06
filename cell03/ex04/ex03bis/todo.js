$(document).ready(function () {
  var cookies = document.cookie;
  var list = document.cookie.substring(5).split(",");
  $(".btn-add").on("click", function () {
    const val = encodeURIComponent(prompt());
    if ((val !== null) & (val !== "")) {
      if (cookies) {
        document.cookie = `data=${val + cookies.split("data=")}`;
        cookies = document.cookie;
        $("#ft_list").prepend(`<li id="list">${val}</li>`);
      } else {
        document.cookie = `data=${val}`;
        cookies = document.cookie;
        $("#ft_list").prepend(`<li>${val}</li>`);
      }
    }
  });

  $("#ft_list").on("click", "#list", function () {
    if (confirm("Do you want to delete this task?")) {
      const text = $(this).text();
      let data = cookies.substring(5);
      let updatedData = data
        .split(",") // string to array
        .filter((item) => item !== text)
        .join(","); //back to string
      document.cookie = `data=${updatedData}`;
      $(this).remove();
    }
  });

  function showList() {
    if (list[0] !== "") {
      for (let i in list) {
        if (list[i] !== "")
          $("#ft_list").append(`<li class="${i}" id="list">${list[i]}</li>`);
      }
    }
  }
  showList();
});
