import withLoader from "./HOC/withLoader";

const Pokemon = (props) => {
  const { data } = props;
  return (
    <div className="m-4 flex w-56 flex-col items-center justify-start rounded">
      <img
        src={data.sprites.other.showdown["front_default"]}
        className="w-52"
      />
    </div>
  );
};

const PokemonWithLoader = withLoader(
  Pokemon,
  `https://pokeapi.co/api/v2/pokemon/702`,
);

export default PokemonWithLoader;
