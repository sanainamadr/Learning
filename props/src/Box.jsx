import "./App.css";

function Box(props) {
    console.log(props);
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <h2>Hello from me</h2>
    </div>
  );
}

export default Box;