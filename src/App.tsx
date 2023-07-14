import React from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <DateTimePicker
          onChange={()=> {}}
          value={new Date("12/12/2020")}
          clearIcon={null}
          maxDate={new Date(3000, 12, 30)}
        />
      </header>
    </div>
  );
}

export default App;
