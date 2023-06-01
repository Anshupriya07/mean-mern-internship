const button1 = document.getElementById("clickable1");
  const button2 = document.getElementById("clickable2");
  let coffeeQuantity = 0; // Variable to track coffee quantity

  button1.addEventListener("click", () => {
    const div = document.getElementById("showable1");
    const image = document.createElement("img");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmJj7vTa2a5wRo8GLE68n4YBIMLM-OQFvEQ&usqp=CAU";
    div.append(image);

    // Update coffee quantity
    coffeeQuantity++;
    updateTable();
  });

  button2.addEventListener("click", () => {
    window.location.reload();
  });

  const button3 = document.getElementById("clickable3");
  const button4 = document.getElementById("clickable4");
  const table = document.querySelector("table");

  button3.addEventListener("click", () => {
    const div = document.getElementById("showable2");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = "Coffee";
    const td2 = document.createElement("td");
    td2.innerText = coffeeQuantity.toString(); // Use the coffeeQuantity variable to set the quantity
    const td3 = document.createElement("td");
    td3.innerText = "250/-";
    tr.append(td1, td2, td3);
    table.querySelector("tbody").append(tr);

    // Update coffee quantity
    coffeeQuantity++;
    updateTable();
  });

  button4.addEventListener("click", () => {
    window.location.reload();
  });

  function updateTable() {
    const quantityCell = table.querySelector("tbody tr:last-child td:nth-child(2)");
    quantityCell.innerText = coffeeQuantity.toString();
  }