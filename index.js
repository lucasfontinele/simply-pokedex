const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function handleFindPokemonByName() {
  const pokemonName = document.getElementById("name").value;
  const response = await fetch(`${BASE_URL}/${pokemonName}`)

  const data = await response.json();

  document.getElementById("pokemonImg").src = data?.sprites?.back_default;
  document.getElementById("pokemonName").innerHTML = `<strong id="pokemonName">${data?.name}</strong>`;
  document.getElementById("pokemonTypes").innerHTML = `<span className="pokemonTypes">${data?.types?.map(t => t?.type?.name).join(", ")}</span>`;

  document.getElementById("pokemon-card").className = "card";
}

function checkPokemonName() {
  const pokemonName = document.getElementById("name").value;

  if (!pokemonName) {
    document.getElementById("searchButton").setAttribute("disabled", true);

    return;
  }

  document.getElementById("searchButton").removeAttribute("disabled");
}

checkPokemonName();
