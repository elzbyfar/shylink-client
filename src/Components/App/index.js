import React, { useState } from 'react';
import LogoComponent from '../LogoComponent';
import FormComponent from '../FormComponent';
import Signature from '../Signature'
import './styles.css';

function App() {
	const [ fullAddress, setFullAddress ] = useState('');
	const [ shortcutID, setShortcutID ] = useState('');
	const [ alias, setAlias ] = useState('');
	const [ copied, setCopied ] = useState(false);
	const [ highlighter, setHighlighter ] = useState(false);

	return (
		<div className="App">
			<LogoComponent />
			<div className="body">
				<FormComponent
					fullAddress={fullAddress}
					setFullAddress={setFullAddress}
					alias={alias}
					setAlias={setAlias}
					shortcutID={shortcutID}
					setShortcutID={setShortcutID}
					copied={copied}
					setCopied={setCopied}
					highlighter={highlighter}
					setHighlighter={setHighlighter}
				/>
				<Signature />
			</div>
		</div>
	);
}

export default App;
