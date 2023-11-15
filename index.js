document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector("form");
  let storedParagraphs = JSON.parse(localStorage.getItem("paragraphs")) || [];

  function updateLocalStorage() {
    localStorage.setItem(
      "paragraphs",
      JSON.stringify(
        Array.from(container.getElementsByTagName("p")).map(
          (p) => p.textContent
        )
      )
    );
  }

  storedParagraphs.forEach(function (text) {
    let storedContent = document.createElement("p");
    storedContent.textContent = text;
    storedContent.addEventListener("click", function () {
      storedContent.remove();
      updateLocalStorage();
    });
    container.appendChild(storedContent);
  });

  document.addEventListener("keydown", function (event) {
    let valueInput = document.getElementById("todo").value;
    if (valueInput !== "" && event.key === "Enter") {
      event.preventDefault();
      let newContent = document.createElement("p");
      newContent.textContent = valueInput;
      newContent.addEventListener("click", function () {
        newContent.remove();
        updateLocalStorage();
      });
      container.appendChild(newContent);
      document.getElementById("todo").value = "";
      updateLocalStorage();
    }
  });
});
