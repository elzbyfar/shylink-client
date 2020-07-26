import React from 'react';
import './styles.css'

const index = () => {
	return (
		<div className="logo-container" onClick={() => window.location.reload(true)}>
      <div className="logo"></div>
		</div>
	);
};

export default index;
