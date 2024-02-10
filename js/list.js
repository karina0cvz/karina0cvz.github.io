document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#addCharacterBtn").addEventListener("click", event => {
      fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
          const character = data.results[Math.floor(Math.random() * data.results.length)];
          const itemList = document.getElementById("my-list");
          const template = document.getElementById("list-template");
          const total = itemList.childElementCount + 1;
          const clone = template.content.cloneNode(true);
          clone.querySelector("[data-id='number']").textContent = total;
          clone.querySelector("[data-id='title']").textContent = character.name;
          clone.querySelector("[data-id='content']").textContent = character.species;
          itemList.appendChild(clone);
        })
        .catch(error => console.error("Error fetching characters", error));
    });
  
    document.querySelector("#clearAllBtn").addEventListener("click", event => {
      const itemList = document.getElementById("my-list");
      itemList.innerHTML = ""; // Clear all list items
    });
  });
  