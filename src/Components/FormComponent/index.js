import React from 'react';
import fetchLink from '../../Helpers/fetchLink';
import './styles.css';

const index = (props) => {


	const baseURL = 'https://localhost:3000/'
	// const baseURL = 'https://shylink.herokuapp.com/'

	const highlightTitle = () => {
		props.setHighlighter(true);
		setTimeout(() => props.setHighlighter(false), 1000);
	};

	const copyLink = (link) => {
		navigator.clipboard.writeText(link);
		props.setCopied(true);
		setTimeout(() => props.setCopied(false), 700);
	};

	const format = (shorty) => {
		return `${baseURL}/${shorty}`
	};

	return (
		<div className="form-container">
			<div className="form">
				<span className={props.highlighter ? 'form-title-highlight' : 'form-title'}>
					Enter A Loud Link Below
				</span>
				<input
					className="link-field"
					type="text"
					name="fullAddress"
					onChange={(event) => {props.setFullAddress(event.target.value)}}
					value={props.fullAddress}
					placeholder="Loud Link"
				/>
				<div className="submit-container">
					<div className="alias-container">
						<input
							className="alias-field"
							type="text"
							name="alias"
							onChange={(event) => props.setAlias(event.target.value)}
							value={props.alias}
							placeholder="Custom Slug (optional)"
						/>
					</div>
					<button
						id={props.fullAddress === '' ? 'submit-off' : 'submit'}
						onClick={
							props.fullAddress === '' ? (
								() => highlightTitle()
							) : (
								() => fetchLink({ address: props.fullAddress, alias: props.alias }, props.setShortcutID)
							)
						}
					>
						MAKE IT SHY
					</button>
				</div>
				<div className="result-container">
					<div className="result-wrapper" >
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
							onClick={() => copyLink(`${baseURL}${props.shortcutID}`)}
              value={props.shortcutID === '' ? '' : format(props.shortcutID)}
						/>
						<div className={props.shortcutID === '' ? "result-button-container-hidden" : "result-button-container"} >
							<a className="result-button" alt="visit page" href={`${baseURL}${props.shortcutID}`} target="_blank" rel="noopener noreferrer">
								Open
							</a>
							<span className={props.copied ? 'copied' : 'not-copied'}>COPIED!</span>
							<button className="result-button" onClick={() => copyLink(`${baseURL}${props.shortcutID}`)} >
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
