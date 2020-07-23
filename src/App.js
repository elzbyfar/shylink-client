import React, { useState } from 'react';
import HomeScreen from './Components/HomeScreen'
import './App.css';

function App() {

  const [longURL, setLongURL] = useState('')
  const [alias, setAlias] = useState('')
  const [shorty, setShorty] = useState('SHORT LINK WILL APPEAR HERE')

  console.log(alias)
	return (
		<div className="App">
			<HomeScreen 
        longURL={longURL}
        setLongURL={setLongURL}
        alias={alias}
        setAlias={setAlias}
        shorty={shorty}
        setShorty={setShorty}
      />
		</div>
	);
}

export default App;
