import React from 'react'

function Greetings(props) {

  let lang  = props.lang;
  
  if(lang === 'de') {
    return <p>Hallo {props.children}</p>;
  } else if (lang === 'fr') {
    return <p>Bonjour {props.children}</p>;
  }
}

export default Greetings;