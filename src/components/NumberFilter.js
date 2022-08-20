import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function NumberFilter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);
  const [valueSelected, setValueSelected] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },

  );

  /* console.log(valueSelected); */

  // const [stateColumn, setSatteColumn] = useState('population');

  const handleChange1 = ({ target }) => {
    setValueSelected({
      ...valueSelected,
      column: target.value,
    });
  };
  // console.log(stateColumn);

  // const [stateComparison, setSatteComparison] = useState('maior que');

  const handleChange2 = ({ target }) => {
    setValueSelected({
      ...valueSelected,
      comparison: target.value,
    });
  };
  // console.log(stateComparison);

  // const [stateValue, setSatteValue] = useState('');

  const handleChange3 = ({ target }) => {
    setValueSelected({
      ...valueSelected,
      value: target.value,
    });
  };

  const handleClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues, valueSelected,
    ]);
  };

  // console.log(filterByNumericValues);

  return (
    <div>
      <select data-testid="column-filter" onChange={ handleChange1 }>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter" onChange={ handleChange2 }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChange3 }
        value={ valueSelected.value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumberFilter;
