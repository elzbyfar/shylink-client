import React, { useState } from 'react';
// import HomeScreen from '../HomeScreen'
import LogoComponent from '../LogoComponent'
import FormComponent from '../FormComponent'
import './styles.css';

function App() {

  const [longURL, setLongURL] = useState('')
  const [alias, setAlias] = useState('')
  const [shorty, setShorty] = useState('SHORT LINK WILL APPEAR HERE')
  const [copied, setCopied] = useState(false)
  const [highlighter, setHighlighter] = useState(false)

	return (
		<div className="App">
      <LogoComponent 
      
      />
      <FormComponent 
        longURL={longURL}
        setLongURL={setLongURL}
        alias={alias}
        setAlias={setAlias}
        shorty={shorty}
        setShorty={setShorty}
        copied={copied}
        setCopied={setCopied}
        highlighter={highlighter}
        setHighlighter={setHighlighter}  
      />
		</div>
	);
}

export default App;
