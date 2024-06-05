import CurrencyInput from 'react-native-currency-input';
import React from 'react';

function MoneyInput() {
  const [value, setValue] = React.useState(0); // can also be null

  return <CurrencyInput value={value} onChangeValue={setValorVenda} />;
}

export default MoneyInput;