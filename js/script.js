function copyToClipboard(input) {
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);
  alert("Image URL copied!");
}
