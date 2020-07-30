import React from 'react';
import fetchLink from '../../Helpers/fetchLink';
import './styles.css';

const index = (props) => {
	// const baseURL = 'https://localhost:3000/'
	const baseURL = 'https://shylink.herokuapp.com/';

	const highlightTitle = () => {
		props.setHighlighter(true);
		setTimeout(() => props.setHighlighter(false), 1000);
	};

	const copyLink = (link) => {
		navigator.clipboard.writeText(link);
		props.setCopied(true);
		setTimeout(() => props.setCopied(false), 700);
	};

	const canSubmit = () => {
		return props.fullAddress === ''
			? () => highlightTitle()
			: () => fetchLink({ address: props.fullAddress, alias: props.alias }, props.setShortcutID);
	};

	const format = (shortcutID) => {
		const trimmedURL = baseURL.replace('https://', '');
		return `${trimmedURL}${shortcutID}`;
	};

	const fireCopy = () => {
		return () => copyLink(`${baseURL}${props.shortcutID}`);
	};

	const shortcutIsBlank = () => {
		return props.shortcutID === '';
	};

	return (
		<div className="form-container">
			<div className="form">
				<h6 className={props.highlighter ? 'form-title-highlight' : 'form-title'}>Enter A Loud Link Below</h6>
				<input
					className="link-field"
					type="text"
					onChange={(ev) => props.setFullAddress(ev.target.value)}
					value={props.fullAddress}
					placeholder="Loud Link"
				/>
				<div className="submit-container">
					<input
						className="alias-field"
						type="text"
						onChange={(ev) => props.setAlias(ev.target.value)}
						value={props.alias}
						placeholder="Custom Slug (optional)"
					/>
					<button id={props.fullAddress === '' ? 'submit-off' : 'submit'} onClick={canSubmit()}>
						MAKE IT SHY
					</button>
				</div>
				<div className="result-container">
					<div className="result-wrapper">
						<input
							className={shortcutIsBlank() ? 'result result-not-filled' : 'no-result'}
							disabled
							onChange={() => null}
							value={shortcutIsBlank() ? 'UNLOCK SHY LINK' : ''}
						/>
						<input
							className={shortcutIsBlank() ? 'no-result' : 'result result-filled'}
							onChange={() => null}
							disabled={shortcutIsBlank()}
							onClick={fireCopy()}
							value={shortcutIsBlank() ? '' : format(props.shortcutID)}
						/>
						<div
							className={shortcutIsBlank() ? 'result-button-container-hidden' : 'result-button-container'}
						>
							<a
								className="result-button"
								alt="visit page"
								href={`${baseURL}${props.shortcutID}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								Open
							</a>
							<span className={props.copied ? 'copied' : 'not-copied'}>COPIED!</span>
							<button className="result-button" onClick={fireCopy()}>
								Copy
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
