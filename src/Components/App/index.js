import React, { useState } from 'react';
// import HomeScreen from '../HomeScreen'
import LogoComponent from '../LogoComponent'
import FormComponent from '../FormComponent'
import './styles.css';

function App() {

  const [longURL, setLongURL] = useState('')
  const [alias, setAlias] = useState('')
  const [shorty, setShorty] = useState('')
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
      {/* <div className="signature-container">
        <span className="signature"><a href="https://www.linkedin.com/in/alejoluis/" target="_blank" className="signature-link">LUIS ALEJO DESIGNS</a> © 2020.</span>
      </div> */}
		</div>
	);
}

export default App;
