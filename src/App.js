import { useState, useEffect } from "react";
import logo from "./cake_logo.svg";
import background from "./background.jpg";
import fireworks from "./fireworks-background.gif";
import "./App.css";

function App() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 5000);

    return () => clearInterval(interval);
  });

  const thisYear = new Date().getFullYear() + "";
  const nextYear = new Date().getFullYear() + 1 + "";
  const birthayDate =
    new Date(`${thisYear}-01-15`) < today
      ? new Date(`${nextYear}-01-15`)
      : new Date(`${thisYear}-01-15`);

  const daysLeft = Math.floor((birthayDate - today) / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor((birthayDate - today) / 1000 / 60 / 60);
  const notYet = (birthayDate - today) / 1000 / 60 / 60 / 24;

  const header =
    notYet > 0 ? (
      <>
        {daysLeft ? (
          <h1>
            {daysLeft} {daysLeft !== 1 ? "Days" : "Day"}
          </h1>
        ) : (
          <h1>
            Less than {hoursLeft + 1} {hoursLeft !== 1 ? "Hours" : "Hour"}
          </h1>
        )}
        <h3>left to Alex Chekova's Birthday</h3>
      </>
    ) : (
      <h1>It's your Birthday!!!</h1>
    );

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          background: `center no-repeat url(${
            notYet > 0 ? background : fireworks
          })`,
          backgroundSize: "cover",
          backgroundColor: "#282c34",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <iframe
          title="unique"
          width="560"
          height="320"
          src="https://musiclab.chromeexperiments.com/Song-Maker/embed/6118495637471232"
          frameborder="0"
          allowfullscreen
        />

        {header}
      </header>
    </div>
  );
}

export default App;
