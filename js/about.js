function wordChange() {
  const textToFix = document.querySelector(".about");
  const newText = textToFix.innerHTML
    .replace(/that/g, " banana")
    .replace(/That/g, " Banana");
  textToFix.innerHTML = newText;
}
setTimeout(wordChange, 3000);
