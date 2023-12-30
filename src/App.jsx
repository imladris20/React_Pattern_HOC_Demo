import withStyles from "./HOC/withStyles";
// import DigimonImagesWithLoader from "./DigimonImages";
// import DogImagesWithLoader from "./DogImages";
// import Pokemon from "./Pokemon";

const LPButton = (props) => {
  return <button {...props}>師父造我有何用</button>;
};

const LPText = (props) => {
  return <p {...props}>{props.text}</p>;
};

const StyledButton = withStyles(LPButton);
const StyledText = withStyles(LPText);

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-4 font-mono text-2xl text-gray-500">
        React-Pattern-HOC, Demo
      </h1>
      <StyledButton />
      <StyledText />
      {/*       <h1 className="my-3 cursor-pointer font-mono text-2xl font-bold">
        咚咚鼠
      </h1>
      <Pokemon />
      <h1 className="mt-8 text-3xl font-bold">狗勾</h1>
      <DogImagesWithLoader />
      <h1 className="mt-8 text-3xl font-bold">亞古獸</h1>
      <DigimonImagesWithLoader /> */}
    </div>
  );
};

export default App;
