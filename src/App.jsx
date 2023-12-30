import withStyles from "./HOC/withStyles";
import Pokemon from "./Pokemon";

const LPButton = () => {
  return <button>Click me!</button>;
};

const LPText = () => {
  return <p>test</p>;
};

const StyledButton = withStyles(LPButton);
const StyledText = withStyles(LPText);
const StyledTest = withStyles("yoyo");

const App = () => {
  console.log(StyledTest);
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-4 font-mono text-2xl text-gray-500">
        React-Pattern-HOC, Demo
      </h1>
      <StyledButton />
      <StyledText />
      <Pokemon />
    </div>
  );
};

export default App;
