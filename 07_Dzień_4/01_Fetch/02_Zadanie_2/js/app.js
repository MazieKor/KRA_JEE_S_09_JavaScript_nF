
// const listEl = document.addEventListener("ul.list");

const getPokemon = function(){
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then( resp => resp.json() )
        .then( data => {
                console.log(data);
            }
        )
        .catch( err => console.log(err));

}

getPokemon();