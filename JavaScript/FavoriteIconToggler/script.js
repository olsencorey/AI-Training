document.querySelectorAll(".favorite-icon").forEach(function(button) {
  button.addEventListener("click", function() {
    button.classList.toggle("filled");
    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;";
    } else {
      button.innerHTML = "&#9825;";
    }
  });
});
