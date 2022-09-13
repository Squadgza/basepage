import React from 'react';

// to use it example 
/* <Emoji symbol="🐑" label="sheep"/>
// or
<Emoji symbol="🐑"/> */

//  👌 here is some to copy

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;