import withStyles from "./HOC/withStyles";
import Pokemon from "./Pokemon";

const Button = () => {
  return <button>Click me!</button>;
};

const Text = () => <p>test</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

const App = () => {
  return (
    <>
      <h1 className="m-4 cursor-pointer font-mono text-2xl text-gray-500">
        React-Pattern-HOC, Demo
      </h1>
      <StyledButton />
      <StyledText />
      <Pokemon />
    </>
  );
};

export default App;
