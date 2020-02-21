import React from 'react';

const Repository = props => (
  <tr>  
   <td>{props.name}</td> 
    <td>{props.languages}</td>
    <td className="tablealign">{props.watchers}</td>
    <td className="tablealign">{props.stars}</td>
  </tr>
);

export default Repository;