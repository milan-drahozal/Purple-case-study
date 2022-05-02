import React from 'react'
import PropTypes from 'prop-types';

function CurrencyRow(props) {
  return (
    <div>
      <input type="number" className='input' value={props.amount} onChange={e => props.onAmountChange(e.target.value)} />
      <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  )
}

CurrencyRow.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyRow;
