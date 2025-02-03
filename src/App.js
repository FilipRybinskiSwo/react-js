import './App.css';

function App() {
  return (
    <div>
      <h1>Hello World {process.env.REACT_APP_BUILD_VERSION}</h1>
    </div>
  );
}

export default App;
