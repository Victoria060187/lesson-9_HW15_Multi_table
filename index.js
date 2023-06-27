const table = document.getElementById("multiplication-table");

for (let i = 0; i < 11; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 11; j++) {
    const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");
    cell.textContent = i === 0 && j === 0 ? "" : i === 0 ? j : j === 0 ? i : i * j;
    row.appendChild(cell);
  }

  table.appendChild(row);
}
