import React from 'react';
import PropTypes from 'prop-types';

function Select({ options }) {
  console.log('hello', options);

  return (
    <select>
      {
        options.length ? options.map((value, key) =>
          <option key={key}>{ value }</option>
        ) : null
      }
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.array,
};

export default Select;
