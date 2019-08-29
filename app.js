const howMany = document.getElementById("howMany");
const output = document.getElementById("output");
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function generate() {
  output.innerHTML = "";
  for (let i = 0; i < howMany.value; i++) {
    const createParagraphText = document.createTextNode(loremIpsum);
    output.appendChild(createParagraphText);
  }
}

/* CLEAR ALL GENERATED ITEMS */
function reset() {
  output.innerHTML = "";
  howMany.value = "";
}

function copy() {
  output.select();
  document.execCommand("copy");
}
