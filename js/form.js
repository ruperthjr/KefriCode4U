const message = document.querySelector("#message");

document.querySelector("form").onkeypress = function(e) {
  let key = e.charCode || e.keyCode; // using charCode or keyCode for cross-browser support
  if (key == 13 && e.target !== message) {
    e.preventDefault(); // do not disable default enter behaviour on message textarea
  }
};
