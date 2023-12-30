import DogImagesWithLoader from "./DogImages";
import withStyles from "./HOC/withStyles";
import Pokemon from "./Pokemon";

const LPButton = () => {
  return <button>師父造我有何用</button>;
};

const LPText = () => {
  return <p>text</p>;
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
      <Pokemon />
      <DogImagesWithLoader />
    </div>
  );
};

export default App;
