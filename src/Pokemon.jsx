import withLoader from "./withLoader";

const Pokemon = (props) => {
  console.log("Pokemon", props);
  const { data } = props;
  return (
    <div className="m-4 flex w-56 flex-col items-center justify-start rounded border border-solid border-gray-400">
      <h1 className="my-3 cursor-pointer font-mono text-2xl">{data.name}</h1>
      <img
        src={data.sprites.other.showdown.front_default}
        className="m-2 w-52"
      />
    </div>
  );
};

const PokemonWithLoader = withLoader(
  Pokemon,
  "https://pokeapi.co/api/v2/pokemon/25",
);

export default PokemonWithLoader;
