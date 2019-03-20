
function jumpField(next, maxSize, event) {
  if (event.value.length >= maxSize) {
    next.focus();
  }
}