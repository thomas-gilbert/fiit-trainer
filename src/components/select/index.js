import React from 'react';

function Select({ options }) {
  console.log('hello', options);

  return (
    <select>
      {
      	options.length ? options.map((value, key) => {
      		return <option key={key}>{ value }</option>;
      	}) : null
      }
    </select>
  );
}

export default Select;
