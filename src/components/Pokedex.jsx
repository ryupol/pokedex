import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import { Box, CircularProgress, Grid } from "@material-ui/core";
export default function Pokedex() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=800").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        const { results } = res.data;
        let pokeData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          pokeData.push(pokemonObject);
        });
        setData(pokeData);
      }
    });
  }, []);
  return (
    <Box style={{ marginTop: 80 }}>
      {data ? (
        <Grid container spacing={2}>
          {data.map((pokemon, index) => {
            return (
              <PokemonCard pokemon={pokemon} image={pokemon.url} key={index} />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
