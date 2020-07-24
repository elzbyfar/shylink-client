import React, { useState } from 'react';
import HomeScreen from './Components/HomeScreen'
import './App.css';

function App() {

  const [longURL, setLongURL] = useState('')
  const [alias, setAlias] = useState('')
  const [shorty, setShorty] = useState('SHORT LINK WILL APPEAR HERE')
  const [copied, setCopied] = useState(false)
  const [fullLogo, setFullLogo] = useState(true)
  const [letterLogo, setLetterLogo] = useState(false)
  const [logoChange, setLogoChange] = useState(false)
  const [highlighter, setHighlighter] = useState(false)

	return (
		<div className="App">
			<HomeScreen 
        longURL={longURL}
        setLongURL={setLongURL}
        alias={alias}
        setAlias={setAlias}
        shorty={shorty}
        setShorty={setShorty}
        copied={copied}
        setCopied={setCopied}
        fullLogo={fullLogo}
        setFullLogo={setFullLogo}
        letterLogo={letterLogo}
        setLetterLogo={setLetterLogo}
        logoChange={logoChange}
        setLogoChange={setLogoChange}
        highlighter={highlighter}
        setHighlighter={setHighlighter}
      />
		</div>
	);
}

export default App;
