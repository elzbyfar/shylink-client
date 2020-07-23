import React from 'react';
import shrink from './shrink.png';
import shrinkLogo from './shrink-logo.png'
import './styles.css';

const index = (props) => {

  const fetchLink = () => {
    fetch('http://localhost:3000/urls', {
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

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
    props.setCopied(true)
    setTimeout(() => props.setCopied(false), 700)
  }

  const switchLogo = () => {
    if (props.logoChange) {
      props.setLogoChange(false)
      props.setLetterLogo(false)
      setTimeout(() => props.setFullLogo(true), 700)
      // setTimeout(() => switchLogo(), 7000)
    } else {
      props.setLogoChange(true)
      props.setFullLogo(false)
      setTimeout(() => props.setLetterLogo(true), 200)
      // setTimeout(() => switchLogo(), 7000)
    }
  }

  // useEffect(() => {
  //   () => switchLogo()
  // }, [])

  return (
    <>
      <div className="logo-container" onMouseEnter={() => switchLogo()} onClick={() => window.location.reload(true)}>
        <img src={shrink} className={props.fullLogo ? "shrink-logo" : "shrink-logo-hidden"} />
				<img src={shrink} className={props.fullLogo ? "shrink-logo-copy" : "shrink-logo-copy-hidden"} />
        <img src={shrinkLogo} className={props.letterLogo ? "shrink-logo" : "shrink-logo-hidden"} />
				<img src={shrinkLogo} className={props.letterLogo ? "shrink-logo-copy" : "shrink-logo-copy-hidden"} />
			</div>
			<div className="form-container" onMouseEnter={() => switchLogo()} > 
				<div className="form">
      <span className="form-title">Enter A Long Link</span>
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
						<button id={props.longURL === '' ? "submit-off" : "submit"} onClick={() => fetchLink()}>SHRINK</button>
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

export default index;
