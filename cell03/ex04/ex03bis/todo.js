$(document).ready(function () {
  const list = $("#ft_list");

  $(".btn-add").on("click", function () {
    const val = prompt("What is your name?");
    if ((val !== "") & (val !== null)) {
      var li = $("<li>");
      var x = $("<p>");
      $(li).html("");
      $(x).html(val);
      list.prepend(li);
      li.prepend(x);
      document.cookie = `data=${$(list).prop("outerHTML")}`;
    }
  });

  $(list).on("click", function (e) {
    if (e.target.tagName === "P") {
      const checked = confirm(`Are you sure to delete?`);
      if (checked) {
        e.target.parentElement.remove();
        document.cookie = `data=${$(list).prop("outerHTML")}`;
      }
    }
  });

  $(list).html(document.cookie.substring(5));
});
