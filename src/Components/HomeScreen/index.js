import React, { useState } from 'react';
import shrink from './shrink.png';
import './styles.css';

const index = (props) => {
  
  return (
    <>
      <div className="logo-container">
				<img src={shrink} className="shrink-logo" />
				<img src={shrink} className="shrink-logo-copy" />
			</div>
			<div className="form-container">
				<div className="form">
      <span className="form-title">Enter A Long Link</span>
					<span className="label">Long Link</span>
          <input 
            className="link" 
            type="text" 
            id="longURL" 
            name="longURL" 
            onChange={() => props.setLongURL()}
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
                onChange={() => props.setAlias()}
								value={props.alias}
								placeholder="(optional)"
							/>
						</div>
						<button id="submit" onClick={() => console.log('fetch')}>SHRINK</button>
					</div>
          <div className="result-container">
            <span className={props.shorty === "SHORT LINK WILL APPEAR HERE" ? "no-result" : "result"} >{props.shorty}
            <div className="result-button-container">
              <span className="result-button">Open</span>
              <span className="result-button">Copy</span>
            </div>
            </span>
            
          </div>
				</div>
			</div>
    </>
  );
}

export default index;
