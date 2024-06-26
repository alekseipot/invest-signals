import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/strategies')
        .then(response => response.json())
        .then(data => {
          setStrategies(data);
          setLoading(false);
        })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="App-intro">
            <h2>Strategies List</h2>
            {strategies.map(strategy =>
                <div key={strategy.id}>
                  {strategy.name}
                </div>
            )}
          </div>
        </header>
      </div>
  );
}

export default App;
