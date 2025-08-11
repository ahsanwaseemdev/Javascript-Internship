/*
"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const textarea = document.querySelector("textarea");

const button = document.querySelector("button");

button.textContent = "camelCase Converter";

button.addEventListener("click", function () {
  let rows = textarea.value.split("\n");
  for (let [i, row] of rows.entries()) {
    row = row.trim();
    let splitted = row.split("_");
    splitted[1] =
      splitted[1][0].toLocaleUpperCase() +
      splitted[1].slice(1).toLocaleLowerCase();

    let newrow = splitted[0] + splitted[1];
    let plane;
    console.log(`${newrow.padEnd(20)} ${"✔".repeat(i + 1)}`);
  }
});
*/
