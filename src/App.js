import { useState, useEffect } from 'react';
import logo from './cake_logo.svg';
import background from './background.jpg';
import fireworks from './fireworks-background.gif';
import './App.css';

function App() {
  const birthayDate = new Date('2021-01-15');

  const [ today, setToday ] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date())
    }, 5000);

    return () => clearInterval(interval);
  });

  const daysLeft = Math.floor((birthayDate - today) / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor((birthayDate - today) / 1000 / 60 / 60);
  const notYet = (birthayDate - today) / 1000 / 60 / 60 / 24;

  const header = notYet > 0
    ? (
      <>
        {daysLeft
          ? <h1>{daysLeft} {daysLeft !== 1 ? 'Days' : 'Day'}</h1>
          : <h1>{hoursLeft} {hoursLeft !== 1 ? 'Hours' : 'Hour'}</h1>}
        <h3>left to Alexandra Chekova's Birthday</h3>
      </>
    )
    : <h1>It's your Birthday!!!</h1>;

  return (
    <div className="App">
      <header className="App-header"
        style={{
          background: `center no-repeat url(${notYet > 0 ? background : fireworks})`,
          backgroundSize: 'cover',
          backgroundColor: '#282c34',
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        {header}
      </header>
    </div>
  );
}

export default App;
