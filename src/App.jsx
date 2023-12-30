import withStyles from "./HOC/withStyles";
import Pokemon from "./Pokemon";

const MyButton = (props) => {
  return <button {...props}>Click me!</button>;
};

const MyText = () => <p>test</p>;

const StyledButton = withStyles(MyButton);
const StyledText = withStyles(MyText);

const App = () => {
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
