import React from 'react';

// const today = new Date();

function Footer({length}) {
  return (
	 <footer>
	 <p>{length} List {length === 1 ? "item" : "items"}</p>
	 </footer>
  )
}

export default Footer