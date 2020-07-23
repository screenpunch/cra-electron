import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const handleClick = () => {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification");
        }

        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            new Notification("Hi there!");
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    new Notification("Hi there!");
                }
            });
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b style={{color: 'red'}}>{process.env.REACT_APP_DESKTOP ? `Desktop` : `Webapp`} Mode</b><br/>
          {process.env.REACT_APP_DESKTOP && <i style={{fontSize: "0.8em"}}>Use the REACT_APP_DESKTOP environment variable to conditionally call Electron APIs</i>}
        </p>
          <button onClick={handleClick}>Notify</button>
      </header>
    </div>
  );
}

export default App;
