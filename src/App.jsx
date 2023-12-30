import Pokemon from "./Pokemon";

function withStyles(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "lightblue",
    };
    return <Component style={style} {...props} test="#22 F2E is the best" />;
  };
}

const Button = (props) => {
  return <button {...props}>Click me!</button>;
};
const Text = (props) => <p {...props}>{props.test}</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

function App() {
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
}

export default App;
