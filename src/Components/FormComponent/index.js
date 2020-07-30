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

	const fireCopy = () => {
		return () => copyLink(`${baseURL}${props.shortcutID}`);
	};
	const format = (shorty) => {
		const trimmedURL = baseURL.replace('https://', '');
		return `${trimmedURL}${shorty}`;
	};

	const canSubmit = () => {
		return props.fullAddress === ''
			? () => highlightTitle()
			: () => fetchLink({ address: props.fullAddress, alias: props.alias }, props.setShortcutID);
	};

	return (
		<div className="form-container">
			<div className="form">
				<h6 className={props.highlighter ? 'form-title-highlight' : 'form-title'}>
					Enter A Loud Link Below
				</h6>
				<input
					className="link-field"
					type="text"
					name="fullAddress"
					onChange={(ev) => props.setFullAddress(ev.target.value)}
					value={props.fullAddress}
					placeholder="Loud Link"
				/>
				<div className="submit-container">
					<div className="alias-container">
						<input
							className="alias-field"
							type="text"
							name="alias"
							onChange={(ev) => props.setAlias(ev.target.value)}
							value={props.alias}
							placeholder="Custom Slug (optional)"
						/>
					</div>
					<button id={props.fullAddress === '' ? 'submit-off' : 'submit'} onClick={canSubmit()}>
						MAKE IT SHY
					</button>
				</div>
				<div className="result-container">
					<div className="result-wrapper">
						<input
							className={props.shortcutID === '' ? 'result result-not-filled' : 'no-result'}
							disabled
							onChange={() => null}
							value={props.shortcutID === '' ? 'UNLOCK SHY LINK' : ''}
						/>
						<input
							className={props.shortcutID === '' ? 'no-result' : 'result result-filled'}
							onChange={() => null}
							disabled={props.shortcutID === '' ? true : false}
							onClick={fireCopy()}
							value={props.shortcutID === '' ? '' : format(props.shortcutID)}
						/>
						<div
							className={
								props.shortcutID === '' ? 'result-button-container-hidden' : 'result-button-container'
							}
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
