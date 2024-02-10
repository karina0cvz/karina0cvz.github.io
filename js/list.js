document.addEventListener("DOMContentLoaded", () => {
  // Función para realizar la búsqueda al hacer clic en el botón de búsqueda
  document.getElementById("searchButton").addEventListener("click", () => {
      // Obtenemos el valor del campo de entrada
      const searchQuery = document.getElementById("searchInput").value.trim();

      // Construimos la URL de la API con el parámetro de búsqueda
      const apiUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;

      // Realizamos la solicitud a la API con la URL construida
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Lógica para mostrar los personajes
              displayCharacters(data.results);
          })
          .catch(error => console.error('Error fetching data:', error));
  });

  // Función para mostrar los personajes en los cards
  function displayCharacters(characters) {
      var itemList = document.getElementById("my-list");
      var template = document.getElementById("list-template");
      itemList.innerHTML = '';

      characters.forEach((character, index) => {
          var total = index + 1;
          var clone = template.content.cloneNode(true);

          clone.querySelector("[data-id='number']").textContent = `${total}`;
          clone.querySelector("[data-id='title']").textContent = character.name;
          clone.querySelector("[data-id='content']").textContent = `Status: ${character.status}, Species: ${character.species}`;
          clone.querySelector("[data-id='image']").src = character.image;

          itemList.appendChild(clone);
      });
  }

  // Recargar pagina
  document.getElementById("clearButton").addEventListener("click", () => {
  
      location.reload();
  });

  // Al cargar la página se mostraran de nuevo todos los personajes
  fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
          displayCharacters(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
});
