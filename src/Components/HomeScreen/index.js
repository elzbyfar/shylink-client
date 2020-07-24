import React, { useEffect } from 'react';
import shrink from './shy-link2.png';
import shrinkLogo from './shrink-logo.png'
import './styles.css';

function Index(props) {

  const fetchLink = () => {
    fetch('https://shylink.herokuapp.com/urls', {
    method: 'POST', 
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
    }, 
    body: JSON.stringify({
      long_address: props.longURL,
      short_address: '', 
      alias: props.alias
    })
  })
    .then(resp => resp.json())
    .then(data => {
      props.setShorty(data.short_address)
    })
  }

  const highlightTitle = () => {
    // console.log('hit')
    props.setHighlighter(true)
    setTimeout(() => props.setHighlighter(false), 1000)
  }

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
    props.setCopied(true)
    setTimeout(() => props.setCopied(false), 700)
  }

  const switchLogo = () => {
    if (props.logoChange === false) {
      setTimeout(() => props.setLogoChange(null), 4000)
      setTimeout(() => {
        switchLogo()
        props.setLogoChange(true)
      }, 5000)
    } else if (props.logoChange === true) {
      setTimeout(() => props.setLogoChange(null), 4000)
      setTimeout(() => {
        switchLogo()
        props.setLogoChange(false)
      }, 5000)
    }
  }

  useEffect(() => {
    switchLogo();
  }, [props.logoChange])

  return (
    <>
      <div className="logo-container" onClick={() => window.location.reload(true)}>
        <img src={shrink} className={props.logoChange ? "shrink-logo" : "shrink-logo-hidden"} />
				<img src={shrink} className={props.logoChange ? "shrink-logo-copy" : "shrink-logo-copy-hidden"} />
        <img src={shrinkLogo} className={props.logoChange === false ? "shrink-logo" : "shrink-logo-hidden"} />
				<img src={shrinkLogo} className={props.logoChange === false ? "shrink-logo-copy" : "shrink-logo-copy-hidden"} />
			</div>
			<div className="form-container" > 
				<div className="form">

      <span className={props.highlighter ? "form-title-highlight" : "form-title"}>Enter A Long Link</span>
					<span className="label">Long Link</span>
          <input 
            className="link" 
            type="text" 
            id="longURL" 
            name="longURL" 
            onChange={(event) => props.setLongURL(event.target.value)}
            value={props.longURL} 
            placeholder="" 
          />
					<div className="submit-container">
						<div className="alias-container">
							<span className="label">Custom Slug</span>
							<input
								className="alias"
								type="text"
								id="alias"
                name="alias"
                onChange={(event) => props.setAlias(event.target.value)}
								value={props.alias}
								placeholder="(optional)"
							/>
						</div>
						<button id={props.longURL === '' ? "submit-off" : "submit"} onClick={props.longURL === "" ? () => highlightTitle() : () => fetchLink()}>SHRINK</button>
					</div>
          <div className="result-container">
            <span className={props.shorty === "SHORT LINK WILL APPEAR HERE" ? "no-result" : "result"} onClick={() => copyLink(props.shorty)}>{props.shorty}
            <div className="result-button-container">
              <a className="result-button" href={props.shorty} target="_blank">Open</a>
              <span className={props.copied? "copied" : "not-copied"}>COPIED!</span>
              <a className="result-button" onClick={() => copyLink(props.shorty)}>Copy</a>
            </div>
            </span>
            
          </div>
				</div>
			</div>
    </>
  );
}

export default Index;
